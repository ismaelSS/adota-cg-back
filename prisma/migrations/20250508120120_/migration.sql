/*
  Warnings:

  - A unique constraint covering the columns `[identification]` on the table `oscs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "oscs_identification_key" ON "oscs"("identification");
