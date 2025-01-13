import { PrismaClient } from "@minitroopers/prisma";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import schedule from "node-schedule";
import dailyJob from "./dailyJob.js";
import Env from "./Env.js";
import initRoutes from "./routes.js";
import { initTrooperDay } from "./utils/TrooperDay.js";

const prisma = new PrismaClient(
  Env.DEBUG_QUERIES
    ? {
        log: [
          {
            emit: "event",
            level: "query",
          },
          {
            emit: "stdout",
            level: "error",
          },
          {
            emit: "stdout",
            level: "info",
          },
          {
            emit: "stdout",
            level: "warn",
          },
        ],
      }
    : undefined,
);

if (Env.DEBUG_QUERIES) {
  prisma.$on("query", (e) => {
    console.warn(`Query: ${e.query}`);
    console.warn(`Params: ${e.params}`);
    console.warn(`Duration: ${e.duration}ms`);
  });
}

const app: Express = express();
const port = Env.PORT ?? 3000;

console.log("Express + TypeScript Server");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(
  cors({
    origin: [Env.SELF_URL],
    credentials: true,
  }),
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  schedule.scheduleJob("0 0 * * *", dailyJob(prisma));
});

await initTrooperDay(prisma);

initRoutes(app, prisma);
