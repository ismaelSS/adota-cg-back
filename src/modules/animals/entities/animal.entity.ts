import { AnimalAdoptionStatus, AnimalSize, Gender, OSCStatus } from "generated/prisma";

export class Animal {
  id: string;
  name: string;
  description: string;
  birthDate: Date;
  weight: number;
  specie: string;
  breed: string;
  characteristics: string;
  imageUrl?: string;
  adoptionStatus: AnimalAdoptionStatus;
  size: AnimalSize;
  gender: Gender;
  osc: {
    id: string;
    name: string;
    status: OSCStatus;
  };
}