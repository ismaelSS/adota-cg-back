-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'MALE';
