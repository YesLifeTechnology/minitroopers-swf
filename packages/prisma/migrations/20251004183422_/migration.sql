/*
  Warnings:

  - You are about to drop the column `leftOver` on the `Trooper` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Trooper" DROP COLUMN "leftOver",
ADD COLUMN     "selectedItems" INTEGER[];
