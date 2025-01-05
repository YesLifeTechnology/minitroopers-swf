/*
  Warnings:

  - You are about to drop the column `opponentColor` on the `Fight` table. All the data in the column will be lost.
  - You are about to drop the column `userColor` on the `Fight` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Fight" DROP COLUMN "opponentColor",
DROP COLUMN "userColor";
