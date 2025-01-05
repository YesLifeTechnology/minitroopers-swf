import { PrismaClient } from "@minitroopers/prisma";
import { checkNameValide, getReferralPrice } from "@minitroopers/shared";
import { Request, Response } from "express";
import { auth, IncludeAllUserData } from "../utils/UserHelper.js";

const Users = {
  create: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (
        req.body.army == null ||
        req.body.color == null ||
        req.body.prefix == null ||
        req.body.trooper == null ||
        req.body.userId == null
      ) {
        throw new Error();
      }

      const user = await auth(prisma, req);

      // Check np troopers
      if (user.troopers.length > 0) {
        throw new Error();
      }

      // Check name validity
      if (typeof req.body.army != "string" || !checkNameValide(req.body.army)) {
        throw new Error();
      }

      // Check color [0-5]
      if (
        !(
          typeof req.body.color === "number" &&
          Number.isInteger(req.body.color) &&
          req.body.color >= 0 &&
          req.body.color <= 5
        )
      ) {
        throw new Error();
      }

      // Check prefix [0-5]
      if (
        !(
          typeof req.body.color === "number" &&
          Number.isInteger(req.body.color) &&
          req.body.prefix >= 0 &&
          req.body.prefix <= 5
        )
      ) {
        throw new Error();
      }

      // Check name already exist
      const existingName = await prisma.user.findFirst({
        where: {
          armyName: { equals: req.body.army as string, mode: "insensitive" },
        },
      });

      if (existingName) {
        throw new Error();
      }

      // Check Today Trooper
      const existingTodayTrooper = await prisma.trooperDay.findFirst({
        where: {
          id: req.body.trooper,
        },
      });

      if (!existingTodayTrooper) {
        throw new Error();
      }

      const newIp = (req.headers["x-forwarded-for"] ??
        req.socket.remoteAddress) as string;

      let refArmy = null;
      if (
        req.body.referralName != null &&
        typeof req.body.referralName === "string" &&
        req.body.referralName != "" &&
        checkNameValide(req.body.referralName)
      ) {
        refArmy = await prisma.user.findFirst({
          where: {
            armyName: {
              equals: req.body.referralName as string,
              mode: "insensitive",
            },
          },
          include: {
            sponsoredUsers: true,
          },
        });

        if (refArmy?.id) {
          await prisma.user.update({
            where: { id: refArmy.id },
            data: {
              gold: {
                increment: refArmy.referralGold,
              },
              history: {
                create: {
                  type: "recruit",
                  options: {
                    armyName: req.body.army,
                    reward: refArmy.referralGold,
                    success: true, // false --> if know ip or limit /day
                  },
                },
              },
              referralGold: getReferralPrice(refArmy.sponsoredUsers.length + 1),
            },
          });
        }
      }

      const army = await prisma.user.update({
        where: { id: user.id },
        data: {
          armyName: req.body.army,
          prefix: req.body.prefix,
          color: req.body.color,
          power: 5,
          sponsoredById: refArmy?.id,
          gold: 99999, //debug DEV
          troopers: {
            create: {
              name: existingTodayTrooper.name,
              group: req.body.color,
              seed: existingTodayTrooper.seed,
              choices: [],
            },
          },
          ipAddressUser: {
            create: [{ ip: newIp }],
          },
          history: {
            create: [
              {
                type: "creation",
              },
            ],
          },
        },
        include: IncludeAllUserData,
      });

      res.send(army);
    } catch (error) {
      res.send({ status: "error" });
    }
  },
  signin: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      res.send(user);
    } catch (error) {
      res.send({ status: "error" });
    }
  },
  get: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.query.army || typeof req.query.army != "string") {
        throw new Error();
      }

      const name: string = req.query.army;
      const full: boolean = req.query.full === "true";

      if (!checkNameValide(name)) {
        throw new Error();
      }

      const user = await prisma.user.findFirst({
        where: {
          armyName: { equals: name, mode: "insensitive" },
        },
        select: {
          armyName: true,
          color: full,
          gold: full,
          power: full,
          prefix: true,
          ...(full ? IncludeAllUserData : {}),
        },
      });

      res.send(user);
    } catch (error) {
      res.send({ status: "error" });
    }
  },
};

export default Users;
