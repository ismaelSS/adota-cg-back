import { Controller, Get, Post, Body, Patch, UseGuards, Request, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { AuthGuard } from '../../guards/jwt.guard';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { IsMasterGuard } from 'src/guards/is-master.guard';
import { UpdateAnyUserDto } from './dto/update-any-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(AuthGuard, IsAdminGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('me')
  @UseGuards(AuthGuard)
  findMe(@Request() req: {user: JwtPayload}) {
    return this.usersService.findOne(req.user.sub);
  }

  @Patch('me')
  @UseGuards(AuthGuard)
  update(@Request() req: {user: JwtPayload}, @Body() updateUserDto: UpdateUserDto ) {
    return this.usersService.update(req.user.sub, updateUserDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard, IsMasterGuard)
  updateLowerRole(@Param('id') id:string, @Body() updateUserDto: UpdateAnyUserDto ) {
    return this.usersService.update(id, updateUserDto);
  }

  // @Delete('me')
  // remove(@Request() req: {user: JwtPayload}) {
  //   return this.usersService.remove(req.user.sub);
  // }
}
