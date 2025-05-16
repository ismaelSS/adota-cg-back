/*
  Warnings:

  - The values [APLICATION_ADMIN,APLICATION_MASTER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - The values [SUSPENSE] on the enum `UserStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `address` on the `oscs` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "AnimalAdoptionStatus" ADD VALUE 'RESERVED';

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('APPLICATION_ADMIN', 'APPLICATION_MASTER', 'UNDEFINED', 'ONG_MASTER', 'ONG_ADMIN');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'UNDEFINED';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "UserStatus_new" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED', 'SUSPENDED');
ALTER TABLE "users" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "status" TYPE "UserStatus_new" USING ("status"::text::"UserStatus_new");
ALTER TYPE "UserStatus" RENAME TO "UserStatus_old";
ALTER TYPE "UserStatus_new" RENAME TO "UserStatus";
DROP TYPE "UserStatus_old";
ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "oscs" DROP COLUMN "address";

-- CreateTable
CREATE TABLE "adress" (
    "id" TEXT NOT NULL,
    "road" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "OSCId" TEXT,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adress_OSCId_key" ON "adress"("OSCId");

-- AddForeignKey
ALTER TABLE "adress" ADD CONSTRAINT "adress_OSCId_fkey" FOREIGN KEY ("OSCId") REFERENCES "oscs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
