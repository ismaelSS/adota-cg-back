import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Passport } from 'passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    Passport,
    JwtModule.register({global: true,  secret: process.env.JWT_SECRET, signOptions: { expiresIn: '7d' } }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
