import { IsOptional, IsNumber, IsString, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { AnimalSize } from 'generated/prisma';

export class SearchDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minAge?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxAge?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minWeight?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxWeight?: number;

  @IsEnum(AnimalSize, { message: 'Tamanho inválido' })
  @IsString()
  @IsOptional()
  size?: AnimalSize;

  @IsOptional()
  @IsString()
  oscId?: string;

  @IsOptional()
  @IsString()
  specie?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  name?:string;
}