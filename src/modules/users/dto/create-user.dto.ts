import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";

export class CreateUserDto {
  @IsString({message: "Nome deve ser uma string."})
  @IsNotEmpty({message: "Nome é obrigatório."})
  name: string;

  @IsString({message: "email deve ser um email valido"})
  @IsEmail()
  @IsNotEmpty({message: "email é obrigatório."})
  email: string;

  @IsString({message: "senha deve ser uma string"})
  @MinLength(8, {message: "senha deve ter no mínimo 8 caracteres"})
  @Transform(({value}:{value:string}) => hashSync(value), {groups: ['transform']})
  password: string;
}
