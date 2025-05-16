import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/dataBase/prisma.service';
import { UserRole, User as PrismaUser } from 'generated/prisma';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  
  async create(createUserDto: CreateUserDto) {
    const findUser = await this.findByEmail(createUserDto.email);

    if (findUser) {
      throw new ConflictException('Usuário já existe.');
    }

    const user = new User();

    Object.assign(user, {...createUserDto});

    await this.prisma.user.create({
      data:{
        ...user,
        role: UserRole.UNDEFINED,
      }
    })

  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      throw new NotFoundException('Usuario não encontrado.');
    }

    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<PrismaUser | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    });
    
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id)
    
    const updatedUser = await this.prisma.user.update({where: {id}, data: {...updateUserDto}});

    return plainToInstance(User, updatedUser);
  }

  // async remove(id: string) {
  //   await this.findOne(id);
  //   await this.prisma.user.delete({where: {id}})
  // }
}
