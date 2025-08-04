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
import { auth, IncludeAllUserData } from "../utils/UserHelper.js";

const Missions = {
  createMission:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        if (
          !req.body.missionType ||
          typeof req.body.missionType !== "string" ||
          !["exterminate", "infiltrate", "epic"].includes(req.body.missionType)
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
        ); // <----- TODO

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
) => {
  switch (missionType) {
    case "exterminate":
      return await generateMissionExterminate(user, prisma);
      break;
    case "infiltrate":
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

const generateMissionExterminate = async (
  user: UserExtended,
  prisma: PrismaClient,
) => {
  if (user.exterminationUnlockAt == null) {
    throw new Error();
  }

  const generatedMission = {
    result: Math.random() > 0.5 ? FightResult.win : FightResult.lose,
    data: "data=" + generateBattleDataExterminate(user),
  };

  const mission = await prisma.mission.create({
    data: {
      userId: user.id,
      type: MissionType.exterminate,
      result: generatedMission.result,
      missionInputSWFData: generatedMission.data,
    },
  });

  const returnedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      gold: {
        increment: generatedMission.result === FightResult.win ? 2 : 1,
      },
      ratsCount: {
        increment: generatedMission.result === FightResult.win ? 1 : 0,
      },
      missions: {
        connect: mission,
      },
    },
    include: IncludeAllUserData,
  });

  return {
    returnedUser: returnedUser,
    missionId: mission.id,
    swfData: generatedMission.data,
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

  const datav =
    "oy10:%3B%01%0CZjy10:ClientMode:0:2oy5:7X%01i55732139y5:M%01oy8:%24PS%01y14:bg%2Fattic.jpgR2jy14:BackgroundType:1:0gy11:a%5De%1B%02aoy11:%601%1F%02aoy8:%032%1A4y8:Owenumany6:%0CA2ci75540580y6:An%256jy11:TrooperType:0:0R2zy8:%0Az%0Avahy13:%7D%26%16Y%01ahy8:V%1BE%7Coy13:%0BR%10%1B%02jy6:Weapon:1:0y13:%1A)%13%3D%01ny6:%3BuXEjy12:TargetSystem:0:0y13:%15S%17%3F%03jy10:TargetType:0:0y9:%1DlQK%03jy10:MoveSystem:1:0y11:%11!%0Ea%01jy12:ReloadSystem:2:0y9:)0%19i%03ahggoR9y5:BrsonR11i27647082R12jR13:0:0R2i1R14ahR15ahR16oR17nR19nR20jR21:0:0R22jR23:0:0R24jR25:1:0R26jR27:2:0R28ahgghy9:OPz%16%03i2y11:K)%16%0A%02azi1hgoR8aoR9y3:RatR11i71764R12jR13:2:0R2i2R14ahR15ajy5:Skill:117:0jR33:131:0hR16nghR30zR31ai2hghgzR4y64:https%3A%2F%2Fdata.trooperstest.gued.es%2Fswf%2Farmy.swf%3Fv%3D1g";

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

export default Missions;
