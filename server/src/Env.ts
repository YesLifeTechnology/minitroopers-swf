import * as dotenv from "dotenv";

dotenv.config();

const Env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: process.env.PORT ?? 3000,
  SELF_URL: process.env.SELF_URL ?? "http://localhost:4200/",

  ETWIN_URL: process.env.ETWIN_URL ?? "http://localhost:50321/",
  ETWIN_CLIENT_ID: process.env.ETWIN_CLIENT_ID ?? "minitroopers@clients",
  ETWIN_CLIENT_SECRET: process.env.ETWIN_CLIENT_SECRET ?? "dev",

  DEBUG_QUERIES: process.env.DEBUG_QUERIES ?? true,
};

export default Env;
