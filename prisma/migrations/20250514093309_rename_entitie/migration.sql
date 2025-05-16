/*
  Warnings:

  - You are about to drop the `adoptations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "adoptations" DROP CONSTRAINT "adoptations_animalId_fkey";

-- DropTable
DROP TABLE "adoptations";

-- CreateTable
CREATE TABLE "adoptions" (
    "id" TEXT NOT NULL,
    "adoptionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adopterName" TEXT NOT NULL,
    "adopterEmail" TEXT,
    "adopterPhone" TEXT NOT NULL,
    "adopterCPF" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,

    CONSTRAINT "adoptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adoptions_animalId_key" ON "adoptions"("animalId");

-- AddForeignKey
ALTER TABLE "adoptions" ADD CONSTRAINT "adoptions_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
