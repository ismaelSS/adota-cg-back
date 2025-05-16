import { randomUUID } from "node:crypto";
import { OSCStatus, OSCType} from "generated/prisma";


export class Osc {
  readonly id: string;
  name: string;
  email: string ;
  phone: string;
  description: string;
  OSCType: OSCType;
  descriptionText?: string;
  identification: string;
  status: OSCStatus;


    constructor(){
      this.id = randomUUID();
    }
}
