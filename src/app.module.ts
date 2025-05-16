import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { OscsModule } from './modules/oscs/oscs.module';
import { AnimalsModule } from './modules/animals/animals.module';

@Module({
  imports: [UsersModule, AuthModule, OscsModule, AnimalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
