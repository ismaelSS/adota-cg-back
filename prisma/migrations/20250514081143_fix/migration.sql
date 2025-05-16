/*
  Warnings:

  - You are about to drop the column `species` on the `animals` table. All the data in the column will be lost.
  - Added the required column `specie` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animals" DROP COLUMN "species",
ADD COLUMN     "specie" TEXT NOT NULL;
