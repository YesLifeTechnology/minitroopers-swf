/*
  Warnings:

  - Made the column `CBody` on table `Trooper` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Trooper" ALTER COLUMN "CBody" SET NOT NULL,
ALTER COLUMN "CBody" SET DEFAULT 0;
