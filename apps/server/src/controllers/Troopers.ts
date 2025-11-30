import { PrismaClient } from "@minitroopers/prisma";
import { getAddCost, getUpgradeCost, TrooperSkill } from "@minitroopers/shared";
import { Request, Response } from "express";
import { auth, IncludeAllUserData } from "../utils/UserHelper.js";

const Troopers = {
  updateConfig:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        if (
          !req.body.trooperId ||
          typeof req.body.trooperId != "string" ||
          !req.body.config
        ) {
          throw new Error();
        }
        if (
          req.body.config.targetSystem == null ||
          typeof req.body.config.targetSystem != "number" ||
          req.body.config.targetSystem < 0 ||
          req.body.config.targetSystem > 3
        ) {
          throw new Error();
        }
        if (
          req.body.config.moveSystem == null ||
          typeof req.body.config.moveSystem != "number" ||
          req.body.config.moveSystem < 0 ||
          req.body.config.moveSystem > 2
        ) {
          throw new Error();
        }
        if (
          req.body.config.CBody != null &&
          (typeof req.body.config.CBody != "number" ||
            req.body.config.CBody < 0 ||
            req.body.config.CBody > 7)
        ) {
          throw new Error();
        }

        if (
          req.body.config.selectedItems != null &&
          (typeof req.body.config.selectedItems != "object" ||
            req.body.config.selectedItems.length > 3)
        ) {
          throw new Error();
        }

        const user = await auth(prisma, req);
        if (!user) {
          throw new Error();
        }
        const trooper = user.troopers.find((x) => x.id === req.body.trooperId);
        if (!trooper) {
          throw new Error();
        }

        const trooperSkill = new TrooperSkill(trooper.seed, trooper.choices);

        if (
          req.body.config.CWeapon != null &&
          (typeof req.body.config.CWeapon != "number" ||
            req.body.config.CWeapon < 0 ||
            req.body.config.CWeapon > 30) && // todo sup number weapon trooper
          trooperSkill.getAvailableWeapons().includes(req.body.config.CWeapon)
        ) {
          throw new Error();
        }

        await prisma.trooper.update({
          where: {
            id: trooper.id,
          },
          data: {
            CWeapon: req.body.config.CWeapon,
            CBody: req.body.config.CBody,
            targetSystem: req.body.config.targetSystem,
            targetType: 0, //req.body.config.targetType,
            moveSystem: req.body.config.moveSystem,
            selectedItems: req.body.config.selectedItems ?? [],
          },
        });

        res.send(true);
      } catch (error: any) {
        res.send({ status: "error", reason: error?.message });
      }
    },

  chooseSkill:
    (prisma: PrismaClient) => async (req: Request, res: Response) => {
      try {
        if (!req.body.trooperId || typeof req.body.trooperId != "string") {
          throw new Error();
        }
        if (
          req.body.skillIndex == null ||
          typeof req.body.skillIndex != "number" ||
          req.body.skillIndex < 0 ||
          req.body.skillIndex > 2
        ) {
          throw new Error();
        }
        const user = await auth(prisma, req);
        if (!user) {
          throw new Error();
        }
        const trooper = user.troopers.find((x) => x.id === req.body.trooperId);
        if (!trooper) {
          throw new Error();
        }

        if (req.body.skillIndex == 2) {
          const trooperSkill = new TrooperSkill(trooper.seed, trooper.choices);
          if (!trooperSkill.getSkills().includes(64)) {
            throw new Error();
          }
        }

        const upgradeCost = getUpgradeCost(trooper.choices.length + 1);
        if (user.gold < upgradeCost) {
          throw new Error("Not enought gold");
        }

        await prisma.trooper.update({
          where: {
            id: trooper.id,
          },
          data: {
            choices: {
              push: req.body.skillIndex,
            },
          },
        });

        const userUpdated = await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            gold: user.gold - upgradeCost,
            power: { increment: 1 },
          },
          include: IncludeAllUserData(),
        });
        res.send(userUpdated);
      } catch (error: any) {
        res.send({ status: "error", reason: error?.message });
      }
    },

  add: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.body.trooper || typeof req.body.trooper != "string") {
        throw new Error();
      }
      const user = await auth(prisma, req);
      if (!user || user.troopers.length > 11) {
        throw new Error("limit troopers");
      }
      const existingTodayTrooper = await prisma.trooperDay.findFirst({
        where: {
          id: req.body.trooper,
        },
      });

      if (!existingTodayTrooper) {
        throw new Error();
      }

      const goldNeeded = getAddCost(user.troopers.length);
      if (!(goldNeeded > 0) || user.gold < goldNeeded) {
        throw new Error("Not enought gold");
      }

      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
          gold: {
            decrement: goldNeeded,
          },
          power: {
            increment: 5,
          },
          troopers: {
            create: {
              name: existingTodayTrooper.name,
              group: user.color,
              seed: existingTodayTrooper.seed,
              choices: [],
            },
          },
        },
        include: IncludeAllUserData(),
      });
      res.send(updatedUser);
    } catch (error: any) {
      res.send({ status: "error", reason: error?.message });
    }
  },
};

export default Troopers;
