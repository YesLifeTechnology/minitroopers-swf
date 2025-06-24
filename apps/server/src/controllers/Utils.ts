import { PrismaClient } from "@minitroopers/prisma";
import { checkNameValide } from "@minitroopers/shared";
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
};

export default Utils;
