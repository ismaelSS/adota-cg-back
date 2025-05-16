import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString
} from 'class-validator';
import { OSCType } from 'generated/prisma';
import { IsCpfOrCnpj } from 'src/decorators/is-cpf-or-cnpj';


export class CreateOscDto {
  @IsString({ message: 'nome deve ser uma string' })
  @IsNotEmpty({ message: 'nome não pode ser vazio' })
  name: string;

  @IsString({ message: 'email fantasia deve ser uma string' })
  @IsEmail({}, { message: 'email fantasia deve ser um email válido' })
  email: string;

  @IsString({ message: 'telefone deve ser uma string' })
  @IsPhoneNumber('BR', { message: 'telefone deve ser um numero válido' })
  phone: string;

  @IsString({ message: 'tipo deve ser uma string' })
  @IsEnum(OSCType, { message: 'tipo deve ser um enum válido' })
  OSCType: OSCType;

  @IsString({ message: 'descrição deve ser uma string' })
  @IsOptional()
  descriptionText?: string;

  @IsString({ message: 'identification deve ser uma string' })
  @IsCpfOrCnpj({ message: 'identification deve ser um CPF ou CNPJ válido' })
  identification: string;

  @IsString({ message: 'logradouro deve ser uma string' })
  @IsNotEmpty({ message: 'logradouro não pode ser vazio' })
  road: string;

  @IsString({ message: 'número deve ser uma string' })
  @IsNotEmpty({ message: 'número não pode ser vazio' })
  number: string;

  @IsString({ message: 'bairro deve ser uma string' })
  @IsNotEmpty({ message: 'bairro não pode ser vazio' })
  district: string;

  @IsString({ message: 'cidade deve ser uma string' })
  @IsNotEmpty({ message: 'cidade não pode ser vazia' })
  city: string;

  @IsString({ message: 'estado deve ser uma string' })
  @IsNotEmpty({ message: 'estado não pode ser vazio' })
  uf: string;

  @IsString({ message: 'CEP deve ser uma string' })
  @IsNotEmpty({ message: 'CEP não pode ser vazio' })
  CEP: string;
}
