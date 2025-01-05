-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('en', 'fr', 'de', 'es', 'ru', 'pt');

-- CreateEnum
CREATE TYPE "HistoryType" AS ENUM ('creation', 'war', 'trooperAdd', 'trooperUpdate', 'trooperAvailable', 'recruit');

-- CreateEnum
CREATE TYPE "FightResult" AS ENUM ('win', 'lose');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "lang" "Lang" NOT NULL DEFAULT 'fr',
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ipAddressUser" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "ipAddressUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoryUser" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ts" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "HistoryType" NOT NULL,
    "options" JSONB,
    "userId" UUID NOT NULL,

    CONSTRAINT "HistoryUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trooper" (
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
    "CBody" INTEGER,
    "CWeapon" INTEGER,

    CONSTRAINT "Trooper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrooperDay" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "seed" INTEGER NOT NULL,
    "choices" INTEGER[],

    CONSTRAINT "TrooperDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fight" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "ts" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "opponentName" TEXT NOT NULL,
    "opponentPrefix" TEXT NOT NULL,
    "opponentColor" INTEGER NOT NULL,
    "fightInputSWFData" TEXT NOT NULL,
    "result" "FightResult" NOT NULL,

    CONSTRAINT "Fight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ipAddressUser_id_key" ON "ipAddressUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HistoryUser_id_key" ON "HistoryUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Trooper_id_key" ON "Trooper"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TrooperDay_id_key" ON "TrooperDay"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fight_id_key" ON "Fight"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sponsoredById_fkey" FOREIGN KEY ("sponsoredById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ipAddressUser" ADD CONSTRAINT "ipAddressUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoryUser" ADD CONSTRAINT "HistoryUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trooper" ADD CONSTRAINT "Trooper_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
