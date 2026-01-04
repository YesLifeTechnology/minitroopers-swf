import { FightResult, PrismaClient } from "@minitroopers/prisma";
import {
  BackgroundType,
  ClientMode,
  getTrooperPref,
  objectObfuscator,
  Rand,
  randomMinMax,
  Serializer,
  TrooperType,
  UserExtended,
} from "@minitroopers/shared";
import { Request, Response } from "express";
import Env from "../Env.js";
import { Ruffle } from "../utils/Ruffle.js";
import {
  auth,
  getRaidTroopers,
  IncludeAllUserData,
} from "../utils/UserHelper.js";

const Raids = {
  createRaid:
    (prisma: PrismaClient, ruffle: Ruffle) =>
    async (req: Request, res: Response) => {
      try {
        const user = await auth(prisma, req);

        if (!user) {
          throw new Error();
        }

        const { troopers, level } = await getRaidTroopers(
          prisma,
          user.armyName,
        );

        if (troopers?.length <= 0 || user.raids.length >= 20) {
          throw new Error("No raid left");
        }

        const { returnedUser, raidId, swfData } = await generateRaid(
          user,
          prisma,
          ruffle,
          troopers,
        );

        return res.send({
          user: returnedUser,
          raidId: raidId,
          swfData: swfData,
        });
      } catch (error: any) {
        return res.send({ status: "error", reason: error?.message });
      }
    },

  // getRaid: (prisma: PrismaClient) => async (req: Request, res: Response) => {
  //   try {
  //     console.log(req.query.raidId);
  //     const raidId = req.query.raidId;

  //     if (!raidId || typeof raidId !== "string") {
  //       throw new Error();
  //     }

  //     const raid = await prisma.raid.findFirst({
  //       where: {
  //         id: raidId,
  //       },
  //     });

  //     if (!raid) {
  //       throw new Error();
  //     }

  //     return res.send({
  //       data: "", //raid.missionInputSWFData
  //     });
  //   } catch (error: any) {
  //     return res.send({ status: "error", reason: error?.message });
  //   }
  // },
};

const generateRaid = async (
  user: UserExtended,
  prisma: PrismaClient,
  ruffle: Ruffle,
  affiliatedTroopers: string[],
) => {
  const flashvars =
    "data=" + (await generateBattleDataRaid(user, affiliatedTroopers, prisma));
  const simulateData = await ruffle.runBattle(flashvars);

  const raid = await prisma.raid.create({
    data: {
      userId: user.id,
      result: simulateData.result,
      graveyard: simulateData.graveyard
        .map((x) => {
          if (x < affiliatedTroopers.length) {
            return affiliatedTroopers[x];
          }
          return null;
        })
        .filter((x) => x != null),
    },
  });

  const returnedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      gold: {
        increment: simulateData.result === FightResult.win ? 4 : 0,
      },
      raids: {
        connect: { id: raid.id },
      },
    },
    include: IncludeAllUserData(),
  });

  return {
    returnedUser: returnedUser,
    raidId: raid.id,
    swfData: flashvars,
  };
};

const generateBattleDataRaid = async (
  user: UserExtended,
  affiliatedTroopers: string[],
  prisma: PrismaClient,
) => {
  const armyTroopers = await prisma.trooper.findMany({
    where: {
      id: {
        in: affiliatedTroopers,
      },
    },
  });

  const leftTrooperIndexes = armyTroopers.map((trooper, index) => index);

  const raidPower = calculateRaidPower(user.raids.length + 1);

  const range = getRaidTrooperRange(user.raids.length + 1);

  const opponents = {
    troopers: generatesOpponents(raidPower, range.min, range.max),
  };

  const rightTrooperIndexes = opponents.troopers.map(
    (trooper, index) => index + armyTroopers.length,
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
          gfx: "bg/wood.jpg",
          id: BackgroundType.BG_WOOD,
        },
        armies: [
          {
            troopers: armyTroopers.map((trooper, index) => ({
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
            troopers: opponents.troopers.map((trooper, index) => ({
              name: "Fighter",
              seed: trooper.seed,
              type: TrooperType.HUMAN,
              id: index + user.troopers.length, // Continue sequence from left army
              choices: trooper.choices,
              force: [],
              pref: null,
            })),
            faction: randomMinMax(0, 5),
            __UP2: rightTrooperIndexes, // Order of appearance for right army
          },
        ],
      },
      // Second parameter: attacking army (0 for left, 1 for right)
      0,
    ),
    gfx: Env.SELF_URL + `/assets/swf/army.swf`,
  };

  const obfuscatedData = objectObfuscator(data);

  const serialized = Serializer.serialize(obfuscatedData);

  return encodeURIComponent(serialized);
};

const generatesOpponents = (raidPower: number, min: number, max: number) => {
  const rand = new Rand();
  rand.initSeed(BigInt(Date.now()));

  const { levels, troopers } = generateRandomArmyComposition(
    raidPower,
    min,
    max,
  );

  return Array(troopers)
    .fill(null)
    .map((_, index) => {
      const trooperSeed = rand.random(90000000) + 10000000;
      const trooperLevel = levels[index];

      return {
        seed: trooperSeed,
        level: trooperLevel,
        choices: new Array(trooperLevel - 1).fill(0),
      };
    });
};

const calculateRaidPower = (phase: number) => {
  const coefficients = [0.07556333, 2.28671329, 1.07362082, 11.1958042];

  const index = phase - 1;

  return Math.round(
    coefficients[0] * Math.pow(index, 3) +
      coefficients[1] * Math.pow(index, 2) +
      coefficients[2] * index +
      coefficients[3],
  );
};

const getRaidTrooperRange = (phase: number) => {
  if (phase <= 2) return { min: 1, max: 2 };
  if (phase === 3) return { min: 1, max: 4 };
  if (phase === 4) return { min: 3, max: 6 };
  if (phase === 5) return { min: 4, max: 9 };
  if (phase === 6) return { min: 7, max: 13 };
  if (phase === 7) return { min: 10, max: 16 };
  if (phase === 8) return { min: 16, max: 24 };
  if (phase === 9) return { min: 19, max: 29 };
  if (phase === 10) return { min: 29, max: 32 };
  // Phase 11 and above
  return { min: 32, max: 32 };
};

const generateRandomArmyComposition = (
  targetPower: number,
  minTroopers: number,
  maxTroopers: number,
) => {
  // Calculate absolute possible trooper range based on power
  const absoluteMinTroopers = Math.ceil(targetPower / 54); // Max level (50) + base cost (4)
  const absoluteMaxTroopers = Math.floor(targetPower / 5); // Min level (1) + base cost (4)

  // Use provided range but clamp to absolute possible range, ensuring integers
  let finalMinTroopers = Math.ceil(
    minTroopers !== null
      ? Math.max(minTroopers, absoluteMinTroopers)
      : absoluteMinTroopers,
  );
  let finalMaxTroopers = Math.floor(
    maxTroopers !== null
      ? Math.min(maxTroopers, absoluteMaxTroopers)
      : absoluteMaxTroopers,
  );

  // If max troopers is less than min troopers, set max troopers to min troopers
  if (finalMaxTroopers < finalMinTroopers) {
    finalMinTroopers = finalMaxTroopers;
  }

  // Initialize random number generator
  const rand = new Rand();
  rand.initSeed(BigInt(new Date().getTime()));

  // Randomly choose number of troopers with equal probability
  const numTroopers =
    finalMinTroopers + rand.random(finalMaxTroopers - finalMinTroopers + 1);

  // Calculate remaining power after accounting for base trooper cost and minimum levels
  let remainingPower = targetPower - 4 * numTroopers - numTroopers;

  // Generate levels that sum to the remaining power
  const levels = new Array(numTroopers).fill(1);

  // Distribute remaining power randomly among troopers
  while (remainingPower > 0) {
    // Find a trooper that isn't max level yet
    const availableTroopers = levels
      .map((level, index) => (level < 50 ? index : -1))
      .filter((i) => i !== -1);
    if (availableTroopers.length === 0) break;
    let randomIndex = rand.random(availableTroopers.length);
    const trooperIndex = availableTroopers[randomIndex];
    levels[trooperIndex]++;
    remainingPower--;
  }

  // Sort levels with some randomness (80% chance to put higher level first)
  const sortedLevels = [...levels].sort((a, b) => {
    return rand.random(100) < 80 ? b - a : a - b;
  });

  return {
    troopers: numTroopers,
    levels: sortedLevels,
  };
};

export default Raids;
