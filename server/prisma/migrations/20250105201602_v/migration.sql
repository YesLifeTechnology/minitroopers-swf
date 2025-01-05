/*
  Warnings:

  - Added the required column `userColor` to the `Fight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Fight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userPrefix` to the `Fight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fight" ADD COLUMN     "userColor" INTEGER NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL,
ADD COLUMN     "userPrefix" INTEGER NOT NULL;
