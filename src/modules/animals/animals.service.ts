import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'src/dataBase/prisma.service';
import { Animal } from './entities/animal.entity';
import { plainToInstance } from 'class-transformer';
import { AdoptionDto } from './dto/adoption.dto';
import { SearchDto } from './dto/search.dto';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  async register(createAnimalDto: CreateAnimalDto, userId: string) {
    const userOsc = await this.prisma.oSC.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!userOsc) {
      throw new NotFoundException('Usuário não possui uma OSC cadastrada.');
    }

    if(userOsc.status !== 'ACTIVE') {
      throw new UnauthorizedException('OSC não está ativa.');
    }

    await this.prisma.animal.create({
      data: {
        name : createAnimalDto.name,
        description: createAnimalDto.description,
        birthDate: createAnimalDto.birthDate,
        weight: createAnimalDto.weight, //em kg
        specie: createAnimalDto.specie,
        breed: createAnimalDto.breed,
        characteristics: createAnimalDto.characteristics, //separadas por virgula ex: "bravo, carinhoso"
        imageUrl: createAnimalDto.imageUrl,
        size: createAnimalDto.size,
        oscId: userOsc.id
      },
      
    })

    return { message: 'Animal cadastrado com sucesso.' };
  }

  async findAll(): Promise<Animal[] | null> {
    const animals = await this.prisma.animal.findMany({
      where:{
        osc:{
          status: 'ACTIVE',
        }
      },
    select: {
      id: true,
      name: true,
      description: true,
      birthDate: true,
      weight: true,
      specie: true,
      breed: true,
      characteristics: true,
      imageUrl: true,
      adoptionStatus: true,
      size: true,
      oscId: false,
      osc: {
        select: {
          id: true,
          name: true,
          status:true
        },
      },
    },
      });

    return plainToInstance(Animal, animals);
  }

  async findOne(id: string): Promise<Animal | null> {
    const animal = await this.prisma.animal.findUnique({where: {id}, select: {
      id: true,
      name: true,
      description: true,
      birthDate: true,
      weight: true,
      specie: true,
      breed: true,
      characteristics: true,
      imageUrl: true,
      adoptionStatus: true,
      size: true,
      oscId: false,
      osc: {
        select: {
          id: true,
          name: true,
          status: true,
        },
      },
    },});

    if (!animal) {
      throw new NotFoundException('Animal não encontrado.');
    }

    return plainToInstance(Animal, animal);
  }

  async adoption(id: string, adoptionDto: AdoptionDto, userId: string) {
  
  const animal = await this.prisma.animal.findUnique({
    where: { id },
    select: {
      adoptionStatus: true,
      osc: {
        select: {
          userId: true,
          status: true,
        },
      },
    },
  });
  if (animal?.osc!.status !== 'ACTIVE') {
    throw new UnauthorizedException('OSC não está ativa.');
  }

  if (!animal) {
    throw new NotFoundException('Animal não encontrado.');
  }

  if (animal.osc?.userId !== userId) {
    throw new UnauthorizedException('Apenas o responsável da OSC pode cadastrar uma adoção.');
  }

  if (animal.adoptionStatus === 'ADOPTED') {
    throw new UnauthorizedException('Este animal já foi adotado.');
  }

  await this.prisma.$transaction([
    this.prisma.animal.update({
      where: { id },
      data: { adoptionStatus: 'ADOPTED' },
    }),
    this.prisma.adoption.create({
      data: {
        adopterName: adoptionDto.adopterName,
        adopterEmail: adoptionDto.adopterEmail,
        adopterPhone: adoptionDto.adopterPhone,
        adopterCPF: adoptionDto.adopterCPF,
        animalId: id,
      },
    }),
  ]);

  return { message: 'Adoção registrada com sucesso.' };
}

  async update(id: string, updateAnimalDto: UpdateAnimalDto, userId: string) {
    const userOsc = await this.prisma.oSC.findUnique({
      where: {
        userId: userId,
      },
    });

    
    
    const animal = await this.findOne(id);
    
    if (!animal) {
      throw new NotFoundException('Animal não encontrado.');
    }

    if (!userOsc || userOsc.id !== animal.osc.id) {
      throw new UnauthorizedException('Sem autorização.');
    }
    
    if(userOsc.status !== 'ACTIVE') {
      throw new UnauthorizedException('OSC não está ativa.');
    }

    await this.prisma.animal.update({
      where: { id },
      data: updateAnimalDto,
    });
  }

  async search(searchDto: SearchDto) {
    const { minAge, maxAge, minWeight, maxWeight, size, oscId } = searchDto;

    const birthDateFilter: any = {};
    const today = new Date();

    if (minAge !== undefined) {
      const maxBirthDate = new Date(today);
      maxBirthDate.setFullYear(today.getFullYear() - minAge);
      birthDateFilter.lte = maxBirthDate;
    }
    if (maxAge !== undefined) {
      const minBirthDate = new Date(today);
      minBirthDate.setFullYear(today.getFullYear() - maxAge);
      birthDateFilter.gte = minBirthDate;
    }

    const where: any = {
      ...(Object.keys(birthDateFilter).length && { birthDate: birthDateFilter }),
      ...(minWeight !== undefined && { weight: { gte: minWeight } }),
      ...(maxWeight !== undefined && { weight: { ...(minWeight !== undefined ? { gte: minWeight } : {}), lte: maxWeight } }),
      ...(size && { size }),
      ...(oscId && { oscId }),
      osc: { status: 'ACTIVE' },
      adoptionStatus: 'AVAILABLE',
    };

    const animals = await this.prisma.animal.findMany({
      where,
      select: {
        id: true,
        name: true,
        description: true,
        birthDate: true,
        weight: true,
        specie: true,
        breed: true,
        characteristics: true,
        imageUrl: true,
        adoptionStatus: true,
        size: true,
        osc: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });

    return plainToInstance(Animal, animals);
  }

  async remove(id: string, userId: string) {
    const animal = await this.findOne(id);
    const userOsc = await this.prisma.oSC.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!animal) {
      throw new NotFoundException('Animal não encontrado.');
    }

    if (!userOsc || userOsc.id !== animal.osc.id) {
      throw new UnauthorizedException('Sem autorização.');
    }

    await this.prisma.animal.delete({where: {id}});
  }
}
