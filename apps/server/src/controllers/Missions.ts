import { FightResult, MissionType, PrismaClient } from "@minitroopers/prisma";
import {
  BackgroundType,
  ClientMode,
  getTrooperPref,
  objectObfuscator,
  Rand,
  randomMinMax,
  RatSkills,
  Serializer,
  SkillEnum,
  TrooperType,
  UserExtended,
} from "@minitroopers/shared";
import { Request, Response } from "express";
import { Ruffle } from "../utils/Ruffle.js";
import {
  auth,
  generateBattleData,
  IncludeAllUserData,
} from "../utils/UserHelper.js";

const Missions = {
  createMission:
    (prisma: PrismaClient, ruffle: Ruffle) =>
    async (req: Request, res: Response) => {
      try {
        if (
          !req.body.missionType ||
          typeof req.body.missionType !== "string" ||
          !["exterminate", "infiltrate"].includes(req.body.missionType) //, "epic"
        ) {
          throw new Error();
        }

        const missionType: MissionType = req.body.missionType;

        const user = await auth(prisma, req);

        if (!user) {
          throw new Error();
        }

        // if (!getMissionState(user.missions, missionType).some((x) => x === "pending")) { // <--------- UNCOMMENT MISSION LIMIT
        //   throw new Error("No missions left");
        // }

        const { returnedUser, missionId } = await generateMission(
          user,
          missionType,
          prisma,
          ruffle,
        );

        return res.send({ user: returnedUser, fightId: missionId });
      } catch (error: any) {
        return res.send({ status: "error", reason: error?.message });
      }
    },

  getMission: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      console.log(req.query.missionId);
      const missionId = req.query.missionId;

      if (!missionId || typeof missionId !== "string") {
        throw new Error();
      }

      const mission = await prisma.mission.findFirst({
        where: {
          id: missionId,
        },
      });

      if (!mission) {
        throw new Error();
      }

      return res.send({
        data: mission.missionInputSWFData,
      });
    } catch (error: any) {
      return res.send({ status: "error", reason: error?.message });
    }
  },
};

const generateMission = async (
  user: UserExtended,
  missionType: MissionType,
  prisma: PrismaClient,
  ruffle: Ruffle,
) => {
  switch (missionType) {
    case "exterminate":
      return await generateMissionExterminate(user, prisma, ruffle);
      break;
    case "infiltrate":
      return await generateMissionInfiltrate(user, prisma, ruffle);
      break;
    case "epic":
      break;
  }

  return {
    returnedUser: user,
    missionId: "missionId",
    swfData: "swfData",
  };
};

// Exterminate
const generateMissionExterminate = async (
  user: UserExtended,
  prisma: PrismaClient,
  ruffle: Ruffle,
) => {
  if (user.exterminationUnlockAt == null) {
    throw new Error();
  }

  const flashvars = "data=" + generateBattleDataExterminate(user);
  const simulateData = await ruffle.runBattle(flashvars);

  const mission = await prisma.mission.create({
    data: {
      userId: user.id,
      type: MissionType.exterminate,
      result: simulateData.result,
      missionInputSWFData: flashvars,
    },
  });

  const returnedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      gold: {
        increment: simulateData.result === FightResult.win ? 4 : 0,
      },
      ratsCount: {
        increment: simulateData.result === FightResult.win ? 1 : 0,
      },
      missions: {
        connect: mission,
      },
    },
    include: IncludeAllUserData(),
  });

  return {
    returnedUser: returnedUser,
    missionId: mission.id,
    swfData: flashvars,
  };
};

const generateBattleDataExterminate = (user: UserExtended) => {
  const leftTrooperIndexes = user.troopers.map((trooper, index) => index);

  const rats = { troopers: generatesRats(user) };

  const rightTrooperIndexes = rats.troopers.map(
    (trooper, index) => index + user.troopers.length,
  );

  const rand = new Rand();
  rand.initSeed(BigInt(Date.now() + randomMinMax(1, 999)), 7);
  const seed = 10000000 + rand.random(90000000);

  const battle = {
    seed: seed,
  };

  // Create the base data structure for battle view
  const data = {
    mode: ClientMode.BATTLE(
      // First parameter: battle configuration object
      {
        id: battle.seed, // Battle seed
        bg: {
          gfx: "bg/attic.jpg",
          id: BackgroundType.BG_ATTIC,
        },
        armies: [
          {
            troopers: user.troopers.map((trooper, index) => ({
              name: trooper.name,
              seed: trooper.seed,
              type: TrooperType.HUMAN,
              id: index,
              choices: trooper.choices ?? [],
              force: [],
              pref: getTrooperPref(trooper),
            })),
            faction: user.color,
            __UP2: leftTrooperIndexes, // Order of appearance for left army
          },
          {
            troopers: rats.troopers.map((rat, index) => ({
              name: "Rat",
              seed: rat.seed,
              type: TrooperType.RAT,
              id: index + user.troopers.length, // Continue sequence from left army
              choices: [],
              force: rat.skills.map(
                (skill) => new SkillEnum(SkillEnum.__construct__[skill], skill),
              ),
              pref: null,
            })),
            faction: 0,
            __UP2: rightTrooperIndexes, // Order of appearance for right army
          },
        ],
      },
      // Second parameter: attacking army (0 for left, 1 for right)
      0,
    ),
    gfx: `http://localhost:4200/assets/swf/army.swf`,
  };

  const obfuscatedData = objectObfuscator(data);

  const serialized = Serializer.serialize(obfuscatedData);

  return encodeURIComponent(serialized);
};

const generatesRats = (user: UserExtended) => {
  const ratsCount = user.ratsCount + 1;

  const rand = new Rand();
  rand.initSeed(BigInt(Date.now()));

  return Array(ratsCount)
    .fill(null)
    .map((_, index) => {
      const ratSeed = rand.random(90000000) + 10000000;

      const availableSkills = [...RatSkills];
      const selectedSkills: number[] = [];

      for (let i = 0; i < 2; i++) {
        const skillIndex = rand.random(availableSkills.length);
        selectedSkills.push(availableSkills[skillIndex]);
        availableSkills.splice(skillIndex, 1);
      }
      return {
        seed: ratSeed,
        skills: selectedSkills,
      };
    });
};

// Infiltrate

const generateMissionInfiltrate = async (
  user: UserExtended,
  prisma: PrismaClient,
  ruffle: Ruffle,
) => {
  if (user.exterminationUnlockAt == null) {
    throw new Error();
  }

  const generatedMission = await generateBattleDataInfiltrate(
    prisma,
    user,
    ruffle,
  );

  const mission = await prisma.mission.create({
    data: {
      userId: user.id,
      type: MissionType.infiltrate,
      result: generatedMission.result,
      missionInputSWFData: generatedMission.data,
    },
  });

  const returnedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      gold: {
        increment: generatedMission.result === FightResult.win ? 4 : 0,
      },
      missions: {
        connect: mission,
      },
    },
    include: IncludeAllUserData(),
  });

  return {
    returnedUser: returnedUser,
    missionId: mission.id,
    swfData: generatedMission.data,
  };
};

const generateBattleDataInfiltrate = async (
  prisma: PrismaClient,
  user: UserExtended,
  ruffle: Ruffle,
) => {
  const opponent = await findInfiltrateOpponent(prisma, user);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      infiltrationOpponentDate: new Date(),
      infiltrationOpponentArmy: opponent.id,
    },
  });

  const flashvars =
    "data=" +
    generateBattleData(user, opponent, {
      gfx: "bg/sewer.jpg",
      id: BackgroundType.BG_SEWER,
    });

  const simulateData = await ruffle.runBattle(flashvars);

  return {
    result: simulateData.result,
    data: flashvars,
  };
};

const findInfiltrateOpponent = async (
  prisma: PrismaClient,
  user: UserExtended,
): Promise<UserExtended> => {
  const now = new Date();
  if (
    user.infiltrationOpponentDate &&
    user.infiltrationOpponentArmy &&
    now.getDate() == user.infiltrationOpponentDate.getDate() &&
    now.getMonth() == user.infiltrationOpponentDate.getMonth() &&
    now.getFullYear() == user.infiltrationOpponentDate.getFullYear()
  ) {
    const opponent = (await prisma.user.findFirst({
      where: {
        id: user.infiltrationOpponentArmy,
      },
      include: IncludeAllUserData(),
    })) as UserExtended;
    return opponent;
  }

  const minPower = user.power;
  const maxPower = user.power * 2;

  const randomUserWithTroopers = await prisma.user.findFirst({
    where: {
      power: {
        gte: minPower,
        lte: maxPower,
      },
      id: {
        not: user.id,
      },
    },
    include: {
      troopers: true,
    },
  });

  if (randomUserWithTroopers) {
    return randomUserWithTroopers as UserExtended;
  }

  const rdUser = await prisma.user.findFirst({
    where: {
      id: {
        not: user.id,
      },
    },
    include: {
      troopers: true,
    },
  });

  return rdUser as UserExtended;
};

export default Missions;
