import { Prisma, PrismaClient } from "@minitroopers/prisma";
import { UserExtended } from "@minitroopers/shared";
import { Request } from "express";

export const auth = async (prisma: PrismaClient, request: Request) => {
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

  const user = await prisma.user.findFirst({
    where: {
      id,
      connexionToken: token,
    },
    include: {
      ...IncludeAllUserData,
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

const now = new Date();
const todayStart = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  0,
  0,
  0,
);

export const IncludeAllUserData = {
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
    orderBy: {
      ts: "desc" as Prisma.SortOrder,
    },
  },
  missions: {
    where: {
      ts: {
        gte: todayStart,
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
};
