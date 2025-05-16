-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('APLICATION_ADMIN', 'APLICATION_MASTER', 'UNDEFINED', 'ONG_MASTER', 'ONG_ADMIN');

-- CreateEnum
CREATE TYPE "OSCType" AS ENUM ('ONG', 'AC', 'GSI', 'EB', 'MS', 'CA', 'OSCIP');

-- CreateEnum
CREATE TYPE "userStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED', 'SUSPENSE');

-- CreateEnum
CREATE TYPE "OSCStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED', 'SUSPENSE');

-- CreateEnum
CREATE TYPE "AnimalAdoptionStatus" AS ENUM ('ADOPTED', 'AVAILABLE', 'PENDING');

-- CreateEnum
CREATE TYPE "AnimalSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "userStatus" NOT NULL DEFAULT 'ACTIVE',
    "role" "UserRole" NOT NULL DEFAULT 'UNDEFINED',
    "oscId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oscs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "OSCType" "OSCType" NOT NULL,
    "descriptionText" TEXT,
    "identification" TEXT NOT NULL,
    "status" "OSCStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "oscs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "imageUrl" TEXT,
    "adoptionStatus" "AnimalAdoptionStatus" NOT NULL DEFAULT 'AVAILABLE',
    "adoptionDate" TIMESTAMP(3),
    "size" "AnimalSize" NOT NULL,
    "oscId" TEXT,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adoptations" (
    "id" TEXT NOT NULL,
    "adoptionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adopterName" TEXT NOT NULL,
    "adopterEmail" TEXT,
    "adopterPhone" TEXT NOT NULL,
    "adopterCPF" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,

    CONSTRAINT "adoptations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "oscs_email_key" ON "oscs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "adoptations_animalId_key" ON "adoptations"("animalId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_oscId_fkey" FOREIGN KEY ("oscId") REFERENCES "oscs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_oscId_fkey" FOREIGN KEY ("oscId") REFERENCES "oscs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoptations" ADD CONSTRAINT "adoptations_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
