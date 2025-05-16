import {
  IsNotEmpty,
  IsString
} from 'class-validator';

export class UpdateOscAdressDto {
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
