import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateOscDto } from './dto/create-osc.dto';
import { UpdateOscDto } from './dto/update-osc.dto';
import { PrismaService } from 'src/dataBase/prisma.service';
import { verifyCEP } from 'src/utils/verifyCEP';
import { plainToInstance } from 'class-transformer';
import { Osc } from './entities/osc.entity';
import { OscWithAddress } from './entities/osc-with-address.entity';
import { UserRole } from 'generated/prisma';
import { UpdateOscAdressDto } from './dto/update-osc-address.dto';

@Injectable()
export class OscsService {
  constructor(private prisma: PrismaService) {}

  async create(createOscDto: CreateOscDto, userId: string) {
    const isValidCEP = await verifyCEP(createOscDto.CEP);

    if (!isValidCEP.isValid) {
      throw new BadRequestException(isValidCEP.erro);
    }

    const findUserOsc = await this.prisma.user.findUnique({
      where: {
        id: userId,
      }
    })

    if(findUserOsc?.oscId) {
      throw new UnauthorizedException('Usuário já possui uma OSC cadastrada.');
    }

    const findOsc = await this.prisma.oSC.findUnique({
      where:{
        identification: createOscDto.identification 
      },
    })

    if (findOsc) {
      throw new BadRequestException('OSC já cadastrada.');
    }

    await this.prisma.user.update({where:{id:userId}, data:{role: UserRole.OSC_MASTER}})

    await this.prisma.oSC.create({
      data: {
        name: createOscDto.name,
        email: createOscDto.email,
        phone: createOscDto.phone,
        OSCType: createOscDto.OSCType,
        descriptionText: createOscDto.descriptionText,
        identification: createOscDto.identification,
        adress: {
          create: {
            road: createOscDto.road,
            number: createOscDto.number,
            district: createOscDto.district,
            city: isValidCEP.data?.localidade || createOscDto.city,
            uf: isValidCEP.data?.uf || createOscDto.uf,
            CEP: createOscDto.CEP,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    

  }

  async findAll():Promise<Osc[]> {
    const oscs = await this.prisma.oSC.findMany({where: {status: 'ACTIVE'}});

    return plainToInstance(Osc, oscs)
  }

  async findOne(id: string):Promise<OscWithAddress | null> {
    const osc = await this.prisma.oSC.findUnique({where: {id}, include: {adress: {omit:{OSCId:true}}}});

    if (!osc) {
      throw new NotFoundException('OSC não encontrada.');
    }

    return plainToInstance(OscWithAddress, osc);
  }

  async update(updateOscDto: UpdateOscDto, userId: string) {
    const osc = await this.prisma.oSC.findUnique({where: {userId: userId}});

    if (!osc) {
      throw new NotFoundException('Usuário não possui OSC cadastrada.');
    }

    await this.prisma.oSC.update({
      where: {id: osc.id},
      data: {
        name: updateOscDto.name,
        email: updateOscDto.email,
        phone: updateOscDto.phone,
        OSCType: updateOscDto.OSCType,
        descriptionText: updateOscDto.descriptionText,
        identification: updateOscDto.identification,

      },
    })

  }

    async updateAddress(updateOscDto: UpdateOscAdressDto, userId: string) {
    const osc = await this.prisma.oSC.findUnique({where: {userId: userId}, include: {adress: true}});

    if (!osc) {
      throw new NotFoundException('Usuário não possui OSC cadastrada.');
    }

        const isValidCEP = await verifyCEP(updateOscDto.CEP);

    if (!isValidCEP.isValid) {
      throw new BadRequestException(isValidCEP.erro);
    }

    await this.prisma.oSC.update({
      where: {id: osc.id},
      data: {
        adress:{
          update: {
            road: updateOscDto.road,
            number: updateOscDto.number,
            district: updateOscDto.district,
            city: isValidCEP.data?.localidade || updateOscDto.city,
            uf: isValidCEP.data?.uf || updateOscDto.uf,
            CEP: updateOscDto.CEP,
          },
        }
      },
    })

  }

  remove(id: number) {
    return `This action removes a #${id} osc`;
  }
}
