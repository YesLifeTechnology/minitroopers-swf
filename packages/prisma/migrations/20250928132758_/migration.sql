-- CreateEnum
CREATE TYPE "public"."Lang" AS ENUM ('en', 'fr', 'de', 'es', 'ru', 'pt');

-- CreateEnum
CREATE TYPE "public"."HistoryType" AS ENUM ('creation', 'war', 'trooperAdd', 'trooperUpdate', 'trooperAvailable', 'recruit');

-- CreateEnum
CREATE TYPE "public"."FightResult" AS ENUM ('win', 'lose');

-- CreateEnum
CREATE TYPE "public"."MissionType" AS ENUM ('exterminate', 'infiltrate', 'epic');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" UUID NOT NULL,
    "lang" "public"."Lang" NOT NULL DEFAULT 'fr',
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastConnexion" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "connexionToken" UUID NOT NULL,
    "gold" INTEGER NOT NULL DEFAULT 0,
    "power" INTEGER NOT NULL DEFAULT 0,
    "armyName" VARCHAR(255) NOT NULL,
    "armyUrl" VARCHAR(255) NOT NULL,
    "prefix" INTEGER NOT NULL DEFAULT 0,
    "color" INTEGER NOT NULL DEFAULT 0,
    "sponsoredById" UUID,
    "referralGold" INTEGER NOT NULL DEFAULT 100,
    "ratsCount" INTEGER NOT NULL DEFAULT 0,
    "infiltrationOpponentArmy" UUID,
    "infiltrationOpponentDate" TIMESTAMP(3),
    "infiltrationUnlockAt" TIMESTAMPTZ,
    "exterminationUnlockAt" TIMESTAMPTZ,
    "epicUnlockAt" TIMESTAMPTZ,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ipAddressUser" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "ipAddressUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HistoryUser" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ts" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "public"."HistoryType" NOT NULL,
    "options" JSONB,
    "userId" UUID NOT NULL,

    CONSTRAINT "HistoryUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Trooper" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "choices" INTEGER[],
    "group" INTEGER NOT NULL,
    "seed" INTEGER NOT NULL,
    "targetSystem" INTEGER NOT NULL DEFAULT 0,
    "targetType" INTEGER NOT NULL DEFAULT 0,
    "reloadSystem" INTEGER NOT NULL DEFAULT 2,
    "moveSystem" INTEGER NOT NULL DEFAULT 1,
    "CBody" INTEGER NOT NULL DEFAULT 0,
    "CWeapon" INTEGER,

    CONSTRAINT "Trooper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TrooperDay" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "seed" INTEGER NOT NULL,
    "choices" INTEGER[],

    CONSTRAINT "TrooperDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Fight" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "ts" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userName" TEXT NOT NULL,
    "userPrefix" INTEGER NOT NULL,
    "opponentName" TEXT NOT NULL,
    "opponentPrefix" INTEGER NOT NULL,
    "fightInputSWFData" TEXT NOT NULL,
    "result" "public"."FightResult" NOT NULL,

    CONSTRAINT "Fight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Mission" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "ts" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "public"."MissionType" NOT NULL,
    "missionInputSWFData" TEXT NOT NULL,
    "result" "public"."FightResult" NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Raid" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "ts" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "result" "public"."FightResult" NOT NULL,
    "graveyard" TEXT[],

    CONSTRAINT "Raid_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "public"."User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ipAddressUser_id_key" ON "public"."ipAddressUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HistoryUser_id_key" ON "public"."HistoryUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Trooper_id_key" ON "public"."Trooper"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TrooperDay_id_key" ON "public"."TrooperDay"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fight_id_key" ON "public"."Fight"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Mission_id_key" ON "public"."Mission"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Raid_id_key" ON "public"."Raid"("id");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_sponsoredById_fkey" FOREIGN KEY ("sponsoredById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ipAddressUser" ADD CONSTRAINT "ipAddressUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."HistoryUser" ADD CONSTRAINT "HistoryUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Trooper" ADD CONSTRAINT "Trooper_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Fight" ADD CONSTRAINT "Fight_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mission" ADD CONSTRAINT "Mission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Raid" ADD CONSTRAINT "Raid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
