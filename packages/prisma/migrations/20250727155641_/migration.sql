/*
  Warnings:

  - Changed the type of `type` on the `Mission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MissionType" AS ENUM ('exterminate', 'infiltrate', 'epic');

-- AlterTable
ALTER TABLE "Mission" DROP COLUMN "type",
ADD COLUMN     "type" "MissionType" NOT NULL;
