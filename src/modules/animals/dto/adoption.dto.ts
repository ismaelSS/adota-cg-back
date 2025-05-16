import { IsString, IsNotEmpty, IsOptional, IsEmail, IsPhoneNumber } from 'class-validator';
import { IsCpfOrCnpj } from 'src/decorators/is-cpf-or-cnpj';

export class AdoptionDto {
  @IsString({ message: 'O nome do adotante deve ser uma string' })
  @IsNotEmpty({ message: 'O nome do adotante não pode ser vazio' })
  adopterName: string;

  @IsEmail({}, { message: 'O email do adotante deve ser válido' })
  @IsOptional()
  adopterEmail?: string;

  @IsString({ message: 'O telefone do adotante deve ser uma string' })
  @IsNotEmpty({ message: 'O telefone do adotante não pode ser vazio' })
  @IsPhoneNumber('BR', { message: 'O telefone do adotante deve ser válido' })
  adopterPhone: string;

  @IsString({ message: 'O CPF do adotante deve ser uma string' })
  @IsNotEmpty({ message: 'O CPF do adotante não pode ser vazio' })
  @IsCpfOrCnpj({ message: 'O CPF do adotante deve ser válido' })
  adopterCPF: string;
}