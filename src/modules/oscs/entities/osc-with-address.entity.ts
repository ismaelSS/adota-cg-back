import { randomUUID } from "node:crypto";
import { OSCStatus, OSCType} from "generated/prisma";


export class OscWithAddress {
  readonly id: string;
  name: string;
  email: string ;
  phone: string;
  description: string;
  OSCType: OSCType;
  descriptionText?: string;
  identification: string;
  status: OSCStatus;

  address:{
    road: string;
    number: string;
    district: string;
    city: string;
    uf: string;
    CEP: string;
  }


    constructor(){
      this.id = randomUUID();
    }
}