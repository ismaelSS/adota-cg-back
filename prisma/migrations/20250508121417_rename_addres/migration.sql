/*
  Warnings:

  - You are about to drop the `adress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "adress" DROP CONSTRAINT "adress_OSCId_fkey";

-- DropTable
DROP TABLE "adress";

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "road" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "OSCId" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "address_OSCId_key" ON "address"("OSCId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_OSCId_fkey" FOREIGN KEY ("OSCId") REFERENCES "oscs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
