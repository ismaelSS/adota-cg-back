import { randomUUID } from "node:crypto";
import { Exclude } from "class-transformer";
import { UserRole } from "generated/prisma";

export class User {

  readonly id: string;
  name: string;
  email:string;
  isActive: boolean;
  role: UserRole;
  
  @Exclude()
  password:string;

  constructor(){
    this.id = randomUUID();
  }
}
