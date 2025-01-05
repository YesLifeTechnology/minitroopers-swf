/*
  Warnings:

  - Changed the type of `opponentPrefix` on the `Fight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Fight" DROP COLUMN "opponentPrefix",
ADD COLUMN     "opponentPrefix" INTEGER NOT NULL;
