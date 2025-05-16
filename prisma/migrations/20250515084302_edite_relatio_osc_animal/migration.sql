/*
  Warnings:

  - A unique constraint covering the columns `[oscId]` on the table `animals` will be added. If there are existing duplicate values, this will fail.
  - Made the column `oscId` on table `animals` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "animals" DROP CONSTRAINT "animals_oscId_fkey";

-- AlterTable
ALTER TABLE "animals" ALTER COLUMN "oscId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "animals_oscId_key" ON "animals"("oscId");

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_oscId_fkey" FOREIGN KEY ("oscId") REFERENCES "oscs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
