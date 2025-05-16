/*
  Warnings:

  - The values [OSC_ADMIN] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `oscs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[oscId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('APPLICATION_ADMIN', 'APPLICATION_MASTER', 'UNDEFINED', 'OSC_MASTER');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'UNDEFINED';
COMMIT;

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_oscId_fkey";

-- AlterTable
ALTER TABLE "oscs" ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "oscs_userId_key" ON "oscs"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_oscId_key" ON "users"("oscId");

-- AddForeignKey
ALTER TABLE "oscs" ADD CONSTRAINT "oscs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
