import { PrismaClient } from "@minitroopers/prisma";
import { checkNameValide, UserRanking } from "@minitroopers/shared";
import { Request, Response } from "express";

const Utils = {
  checkNameAvailability:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        if (!checkNameValide(req.query.name as string)) {
          throw new Error();
        }

        const existingName = await prisma.user.findFirst({
          where: {
            armyName: { equals: req.query.name as string, mode: "insensitive" },
          },
        });

        if (existingName) {
          throw new Error();
        } else {
          res.send({ status: "available" });
        }
      } catch (error) {
        console.error(error);
        res.send({ status: "error" });
      }
    },
  checkArmyExist:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        if (!checkNameValide(req.query.name as string)) {
          throw new Error();
        }

        const existingName = await prisma.user.count({
          where: {
            armyName: { equals: req.query.name as string, mode: "insensitive" },
          },
        });

        if (existingName > 0) {
          res.send({ status: true });
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
        res.send({ status: false });
      }
    },
  getTodayTrooper:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        const todayTroopers = await prisma.trooperDay.findMany();

        if (todayTroopers?.length != 5) {
          throw new Error();
        }

        res.send(todayTroopers);
      } catch (error) {
        console.error(error);
        res.send({ status: "error" });
      }
    },

  getRanking: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (
        !checkNameValide(req.query.name as string) &&
        req.query.name != null
      ) {
        throw new Error();
      }

      const currentArmyName = req.query.name;

      let users = await prisma.user.findMany({
        orderBy: {
          power: "desc",
        },
        take: 25,
        include: {
          troopers: true,
          sponsoredUsers: true,
        },
      });

      let currentUser: any | null = null;

      if (
        currentArmyName &&
        typeof currentArmyName === "string" &&
        !users.some((x) => x.armyName === currentArmyName)
      ) {
        currentUser = await prisma.user.findFirst({
          where: {
            armyName: currentArmyName as string,
          },
          include: {
            troopers: true,
            sponsoredUsers: true,
          },
        });
      }

      const formattedUsers: UserRanking[] = [];
      for (const user of users) {
        formattedUsers.push({
          rank: null,
          armyName: user.armyName,
          power: user.power,
          faction: user.color,
          size: user.troopers.length,
          recruits: user.sponsoredUsers.length,
          gold: user.gold,
          isOwner: user.armyName === currentArmyName,
        });
      }

      if (currentUser) {
        const armyRanking =
          (await prisma.user.count({
            where: {
              power: {
                gt: currentUser.power,
              },
            },
          })) + 1;

        formattedUsers.push({
          rank: armyRanking,
          armyName: currentUser.armyName,
          power: currentUser.power,
          faction: currentUser.color,
          size: currentUser.troopers.length,
          recruits: currentUser.sponsoredUsers.length,
          gold: currentUser.gold,
          isOwner: true,
        });
      }

      res.send(formattedUsers);
    } catch (error) {
      console.error(error);
      res.send({ status: "error" });
    }
  },
};

export default Utils;
