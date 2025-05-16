-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_OSCId_fkey";

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_OSCId_fkey" FOREIGN KEY ("OSCId") REFERENCES "oscs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
