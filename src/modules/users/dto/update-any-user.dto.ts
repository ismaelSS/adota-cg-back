import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { UserRole } from "generated/prisma";

export class UpdateAnyUserDto {
  @IsOptional()
  @IsString({message: "Nome deve ser uma string."})
  name?: string;

  @IsOptional()
  @IsString({message: "email deve ser um email valido"})
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString({message: "senha deve ser uma string"})
  @MinLength(8, {message: "senha deve ter no mínimo 8 caracteres"})
  @Transform(({ value }) => value ? hashSync(value) : undefined, { 
    groups: ['transform'] 
  })
  password?: string;

  @IsOptional()
  @IsString({message: "role deve ser uma string"})
  @IsEnum(UserRole, {message: "role deve ser um dos seguintes valores: CLIENT, ADMIN ou MASTER"})
  role?: string;

  @IsOptional()
  @IsBoolean({message: "isActive deve ser um booleano"})
  isActive?: boolean;
}