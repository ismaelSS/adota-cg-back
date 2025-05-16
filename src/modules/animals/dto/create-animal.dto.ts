import { IsString, IsNotEmpty, IsOptional, IsDateString, IsNumber, IsEnum } from 'class-validator';
import { AnimalAdoptionStatus, AnimalSize } from 'generated/prisma';

export class CreateAnimalDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;

  @IsDateString({}, { message: 'A data de nascimento deve ser uma data válida' })
  birthDate: string;

  @IsNumber({}, { message: 'O peso deve ser um número' })
  weight: number;

  @IsString({ message: 'A espécie deve ser uma string' })
  @IsNotEmpty({ message: 'A espécie não pode ser vazia' })
  specie: string;

  @IsString({ message: 'A raça deve ser uma string' })
  @IsNotEmpty({ message: 'A raça não pode ser vazia' })
  breed: string;

  @IsString({ message: 'As características devem ser uma string' })
  @IsNotEmpty({ message: 'As características não podem ser vazias' })
  characteristics: string;

  @IsString({ message: 'A URL da imagem deve ser uma string' })
  @IsOptional()
  imageUrl?: string;

  @IsEnum(AnimalAdoptionStatus, { message: 'Status de adoção inválido' })
  @IsOptional()
  adoptionStatus?: AnimalAdoptionStatus;

  @IsEnum(AnimalSize, { message: 'Tamanho inválido' })
  size: AnimalSize;

}