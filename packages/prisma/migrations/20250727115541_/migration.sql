-- AlterTable
ALTER TABLE "User" ADD COLUMN     "epicUnlockAt" TIMESTAMPTZ,
ADD COLUMN     "exterminationUnlockAt" TIMESTAMPTZ,
ADD COLUMN     "infiltrationUnlockAt" TIMESTAMPTZ;
