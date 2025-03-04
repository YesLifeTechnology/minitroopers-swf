import { PrismaClient } from "@minitroopers/prisma";
import { Express, Request, Response } from "express";
import Fights from "./controllers/Fights.js";
import OAuth from "./controllers/OAuth.js";
import Troopers from "./controllers/Troopers.js";
import Users from "./controllers/Users.js";
import Utils from "./controllers/Utils.js";
import ServerState from "./utils/ServerState.js";

const initRoutes = (app: Express, prisma: PrismaClient) => {
  app.get("/api/is-ready", (req: Request, res: Response<boolean>) => {
    res.status(200).send(ServerState.isReady());
  });

  // OAuth
  app.get("/api/oauth/redirect", OAuth.redirect);
  app.get("/api/oauth/token", OAuth.token(prisma));

  // Utils
  app.get(
    "/api/util/checkNameAvailability",
    Utils.checkNameAvailability(prisma),
  );
  app.get("/api/util/checkArmyExist", Utils.checkArmyExist(prisma));
  app.get("/api/util/getTodayTroopers", Utils.getTodayTrooper(prisma));

  // User
  app.post("/api/user/create", Users.create(prisma));
  app.get("/api/user/signin", Users.signin(prisma));
  app.get("/api/user/get", Users.get(prisma));

  // Trooper
  app.post("/api/trooper/updateConfig", Troopers.updateConfig(prisma));
  app.post("/api/trooper/chooseSkill", Troopers.chooseSkill(prisma));
  app.post("/api/trooper/add", Troopers.add(prisma));

  // Fight
  app.get("/api/fight/getOpponents", Fights.getOpponents(prisma));
  app.post("/api/fight/createFight", Fights.createFight(prisma));
  app.get("/api/fight/getFight", Fights.getFight(prisma));
};

export default initRoutes;
