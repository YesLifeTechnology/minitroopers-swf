import { Prisma, PrismaClient } from "@minitroopers/prisma";
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
import { Request } from "express";
import jwt from "jsonwebtoken";
import Env from "../Env.js";

export const auth = async (prisma: PrismaClient, request: Request) => {
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer")
  ) {
    return authJWT(prisma, request);
  } else if (request.headers.authorization) {
    return authEternal(prisma, request);
  }

  throw new Error("You are not logged in");
};

export const authEternal = async (prisma: PrismaClient, request: Request) => {
  const {
    headers: { authorization },
  } = request;

  if (!authorization) {
    throw new Error("You are not logged in");
  }
  if (typeof authorization !== "string") {
    throw new Error("Invalid authorization header");
  }

  const [id, token] = Buffer.from(authorization.split(" ")[1], "base64")
    .toString()
    .split(":");

  if (!id || !token || id === "null" || token === "null") {
    throw new Error("Invalid authorization header content");
  }

  return afterauth(prisma, request, id, token);
};

export const authJWT = async (prisma: PrismaClient, req: Request) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, Env.SESSION_SECRET) as jwt.JwtPayload;

      const userId = decoded.userId;

      if (!userId || !token || userId === "null" || token === "null") {
        throw new Error("Invalid authorization header content");
      }

      return afterauth(prisma, req, userId, token);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      throw new Error("Invalid authorization header");
    }
  }

  throw new Error("You are not logged in");
};

const afterauth = async (
  prisma: PrismaClient,
  request: Request,
  id: string,
  token: string,
) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
      connexionToken: token,
    },
    include: {
      ...IncludeAllUserData(),
      ipAddressUser: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
  const newIp =
    request.headers["x-forwarded-for"] ?? request.connection.remoteAddress;
  if (
    newIp &&
    typeof newIp === "string" &&
    !user.ipAddressUser.map((x) => x.ip).includes(newIp)
  ) {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastConnexion: new Date(),
        ipAddressUser: {
          create: {
            ip: newIp,
          },
        },
      },
    });
  } else {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastConnexion: new Date(),
      },
    });
  }

  delete (user as Partial<UserExtended>).ipAddressUser;
  return user;
};

export const IncludeAllUserData = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return {
    troopers: {
      orderBy: {
        createdAt: "asc" as Prisma.SortOrder,
      },
    },
    history: {
      take: 5,
      select: {
        options: true,
        type: true,
        ts: true,
      },
      orderBy: {
        ts: "desc" as Prisma.SortOrder,
      },
    },
    fights: {
      take: 5,
      select: {
        id: true,
        result: true,
        ts: true,
      },
      where: {
        ts: {
          gte: today,
        },
      },
      orderBy: {
        ts: "desc" as Prisma.SortOrder,
      },
    },
    missions: {
      where: {
        ts: {
          gte: today,
        },
      },
      orderBy: {
        ts: "desc" as Prisma.SortOrder,
      },
      select: {
        id: true,
        type: true,
        result: true,
        ts: true,
      },
    },
    raids: {
      take: 20,
      select: {
        id: true,
        result: true,
        graveyard: true,
        ts: true,
      },
      where: {
        ts: {
          gte: today,
        },
      },
      orderBy: {
        ts: "desc" as Prisma.SortOrder,
      },
    },
  };
};

export const generateBattleData = (
  leftArmy: UserExtended,
  rightArmy: Omit<UserExtended, "history" | "fights">,
  background = {
    gfx: "bg/garden.jpg",
    id: BackgroundType.BG_GARDEN,
  },
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
        bg: background,
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
    gfx: Env.SELF_URL + `assets/swf/army.swf`,
  };

  const obfuscatedData = objectObfuscator(data);

  const serialized = Serializer.serialize(obfuscatedData);

  return encodeURIComponent(serialized);
};

export const getRaidTroopers = async (
  prisma: PrismaClient,
  armyName: string,
) => {
  const user = await prisma.user.findFirst({
    where: {
      armyName: armyName,
    },
    include: {
      ...IncludeAllUserData(),
      sponsoredUsers: {
        include: {
          troopers: true,
        },
      },
    },
  });

  if (!user || user.troopers.length == 0) {
    throw new Error();
  }

  const troopers: string[] = [];

  const troopersInGraveyard = user.raids.map((x) => x.graveyard).flat();
  if (!troopersInGraveyard.includes(user.troopers[0].id)) {
    troopers.push(user.troopers[0].id);
  }

  for (const affiliatedUser of user.sponsoredUsers) {
    if (
      affiliatedUser.troopers.length &&
      !troopersInGraveyard.includes(affiliatedUser.troopers[0].id)
    ) {
      troopers.push(affiliatedUser.troopers[0].id);
    }
  }

  const level = user.raids.length + 1;

  return { troopers, level };
};
