import { Module } from '@nestjs/common';
import { OscsService } from './oscs.service';
import { OscsController } from './oscs.controller';
import { PrismaService } from 'src/dataBase/prisma.service';

@Module({
  controllers: [OscsController],
  providers: [OscsService, PrismaService],
})
export class OscsModule {}
