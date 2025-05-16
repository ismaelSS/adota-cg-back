import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString
} from 'class-validator';
import { OSCType } from 'generated/prisma';
import { IsCpfOrCnpj } from 'src/decorators/is-cpf-or-cnpj';

export class UpdateOscDto{
    @IsOptional()
    @IsString({ message: 'nome deve ser uma string' })
    name?: string;

    @IsOptional()
    @IsString({ message: 'email fantasia deve ser uma string' })
    @IsEmail({}, { message: 'email fantasia deve ser um email válido' })
    email?: string;
  
    @IsOptional()
    @IsString({ message: 'telefone deve ser uma string' })
    @IsPhoneNumber('BR', { message: 'telefone deve ser um numero válido' })
    phone?: string;
  
    @IsOptional()
    @IsString({ message: 'tipo deve ser uma string' })
    @IsEnum(OSCType, { message: 'tipo deve ser um enum válido' })
    OSCType?: OSCType;
  
    @IsOptional()
    @IsString({ message: 'descrição deve ser uma string' })
    @IsOptional()
    descriptionText?: string;
  
    @IsOptional()
    @IsString({ message: 'identification deve ser uma string' })
    @IsCpfOrCnpj({ message: 'identification deve ser um CPF ou CNPJ válido' })
    identification?: string;
}
