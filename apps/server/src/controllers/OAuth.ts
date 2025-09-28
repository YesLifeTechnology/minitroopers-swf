import { EternaltwinNodeClient } from "@eternaltwin/client-node";
import { AuthType } from "@eternaltwin/core/auth/auth-type";
import { RfcOauthClient } from "@eternaltwin/oauth-client-http/rfc-oauth-client";
import { PrismaClient } from "@minitroopers/prisma";
import { Request, Response } from "express";
import urlJoin from "url-join";
import Env from "../Env.js";
import { IncludeAllUserData } from "../utils/UserHelper.js";

const oauthClient = new RfcOauthClient({
  authorizationEndpoint: new URL(urlJoin(Env.ETWIN_URL, "oauth/authorize")),
  tokenEndpoint: new URL(urlJoin(Env.ETWIN_URL, "oauth/token")),
  callbackEndpoint: new URL(urlJoin(Env.SELF_URL, "oauth/callback")),
  clientId: Env.ETWIN_CLIENT_ID,
  clientSecret: Env.ETWIN_CLIENT_SECRET,
});

const OAuth = {
  redirect: (req: Request, res: Response) => {
    try {
      res.send({
        url: oauthClient.getAuthorizationUri("base", ""),
      });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  token: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.query.code || typeof req.query.code !== "string") {
        throw new Error("Invalid code");
      }
      // ETwin Token
      const token = await oauthClient.getAccessToken(req.query.code);
      // ETWin User
      const etwinClient = new EternaltwinNodeClient(new URL(Env.ETWIN_URL));
      const self = await etwinClient.getAuthSelf({ auth: token.accessToken });
      if (self.type !== AuthType.AccessToken) {
        throw new Error("Invalid auth type");
      }
      // Update or store user
      const { user: etwinUser } = self;
      const existingUser = await prisma.user.findFirst({
        where: { id: etwinUser.id },
      });
      // If user does not exist, create it
      if (!existingUser) {
        await prisma.user.create({
          data: {
            id: etwinUser.id,
            connexionToken: token.accessToken,
            name: etwinUser.displayName.current.value,
            armyName: "",
            armyUrl: "",
          },
          select: { id: true },
        });
      } else {
        // If user exists, update it
        await prisma.user.update({
          where: { id: etwinUser.id },
          data: {
            name: etwinUser.displayName.current.value,
            connexionToken: token.accessToken,
          },
          select: { id: true },
        });
      }
      // Fetch user data
      const user = await prisma.user.findFirst({
        where: { id: etwinUser.id, connexionToken: token.accessToken },
        include: IncludeAllUserData(),
      });
      res.send(user);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
};

export default OAuth;
