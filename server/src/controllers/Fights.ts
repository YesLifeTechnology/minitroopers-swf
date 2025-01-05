import { FightResult, PrismaClient } from "@minitroopers/prisma";
import {
  BackgroundType,
  checkNameValide,
  ClientMode,
  getTrooperPref,
  objectObfuscator,
  parseToPartialUser,
  Rand,
  randomMinMax,
  Serializer,
  shuffle,
  TrooperType,
  UserExtended,
} from "@minitroopers/shared";
import { Request, Response } from "express";
import { auth, IncludeAllUserData } from "../utils/UserHelper.js";

const Fights = {
  getOpponents:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        const user = await auth(prisma, req);

        if (!user) {
          throw new Error();
        }

        // if (!getFightState(user.fights).some((x) => x === "pending")) { // <--------- UNCOMMENT FIGHT LIMIT
        //   throw new Error("No fight left");
        // }

        const alreadySeens = []; //user.fights.map((x) => x.opponent); // <---------- UNCOMMENT
        alreadySeens.push(user.armyName);

        const takeArgument = 10;

        const users = await prisma.user.findMany({
          where: {
            armyName: {
              notIn: alreadySeens,
            },
            power: {
              // gte: user.power - PowerDiff, // <--------- UNCOMMENT FIGHT LIMIT
              // lte: user.power + PowerDiff,
            },
          },
          orderBy: {
            power: "asc",
          },
          take: takeArgument,
          include: {
            troopers: true,
          },
        });

        const opponents = shuffle(users)
          .slice(0, 4)
          .map((x) => parseToPartialUser(x));

        return res.send({ opponents: opponents });
      } catch (error: any) {
        return res.send({ status: "error", reason: error?.message });
      }
    },

  createFight:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        if (
          !req.body.opponentName ||
          typeof req.body.opponentName !== "string" ||
          !checkNameValide(req.body.opponentName)
        ) {
          throw new Error();
        }

        const user = await auth(prisma, req);

        if (!user) {
          throw new Error();
        }

        // if (!getFightState(user.fights).some((x) => x === "pending")) { // <--------- UNCOMMENT FIGHT LIMIT
        //   throw new Error("No fight left");
        // }

        const opponent = await prisma.user.findFirst({
          where: {
            armyName: {
              equals: req.body.opponentName as string,
              mode: "insensitive",
            },
          },
          include: {
            troopers: true,
          },
        });

        if (!opponent) {
          throw new Error();
        }

        // if (user.power > opponent.power + PowerDiff * 2) { // <--------- UNCOMMENT THIS
        //   throw new Error(); // power diff + margin too important
        // }

        const { returnedUser, fightId } = await generateFight(
          user,
          opponent as UserExtended,
          prisma,
        ); // <----- TODO

        return res.send({ user: returnedUser, fightId: fightId });
      } catch (error: any) {
        return res.send({ status: "error", reason: error?.message });
      }
    },

  getFight: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const fightId = req.query.fightId;

      if (!fightId || typeof fightId !== "string") {
        throw new Error();
      }

      const fight = await prisma.fight.findFirst({
        where: {
          id: fightId,
        },
      });

      if (!fight) {
        throw new Error();
      }

      return res.send({
        left: {
          armyName: fight.userName,
          prefix: fight.userPrefix,
        },
        right: {
          armyName: fight.opponentName,
          prefix: fight.opponentPrefix,
        },
        data: fight.fightInputSWFData,
      });
    } catch (error: any) {
      return res.send({ status: "error", reason: error?.message });
    }
  },
};

const generateFight = async (
  user: UserExtended,
  opponent: Omit<UserExtended, "history" | "fights">,
  prisma: PrismaClient,
) => {
  const generatedFight = {
    result: Math.random() > 0.5 ? FightResult.win : FightResult.lose,
    data: "data=" + generateBattleData(user, opponent),
  };

  const fight = await prisma.fight.create({
    data: {
      userId: user.id,
      userName: user.armyName,
      userPrefix: user.prefix,
      opponentName: opponent.armyName,
      opponentPrefix: opponent.prefix,
      result: generatedFight.result,
      fightInputSWFData: generatedFight.data,
    },
  });

  const returnedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      gold: {
        increment: generatedFight.result === FightResult.win ? 2 : 1,
      },
      fights: {
        connect: fight,
      },
      history: {
        create: {
          type: "war",
          options: {
            result: generatedFight.result,
            fightId: fight.id,
          },
        },
      },
    },
    include: IncludeAllUserData,
  });

  return {
    returnedUser: returnedUser,
    fightId: fight.id,
    swfData: generatedFight.data,
  };
};

const generateBattleData = (
  leftArmy: UserExtended,
  rightArmy: Omit<UserExtended, "history" | "fights">,
) => {
  const leftTrooperIndexes = leftArmy.troopers.map((trooper, index) => index);
  const rightTrooperIndexes = rightArmy.troopers.map(
    (trooper, index) => index + leftArmy.troopers.length,
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
          gfx: "bg/garden.jpg",
          id: BackgroundType.BG_GARDEN,
        },
        armies: [
          {
            troopers: leftArmy.troopers.map((trooper, index) => ({
              name: trooper.name,
              seed: trooper.seed,
              type: TrooperType.HUMAN,
              id: index, // Sequential index starting from 0
              choices: trooper.choices ?? [],
              force: [],
              pref: getTrooperPref(trooper),
            })),
            faction: leftArmy.color,
            __UP2: leftTrooperIndexes, // Order of appearance for left army
          },
          {
            troopers: rightArmy.troopers.map((trooper, index) => ({
              name: trooper.name,
              seed: trooper.seed,
              type: TrooperType.HUMAN,
              id: index + leftArmy.troopers.length, // Continue sequence from left army
              choices: trooper.choices ?? [],
              force: [],
              pref: getTrooperPref(trooper),
            })),
            faction: rightArmy.color,
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

export default Fights;
