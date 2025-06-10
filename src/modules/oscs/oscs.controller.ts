import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { OscsService } from './oscs.service';
import { CreateOscDto } from './dto/create-osc.dto';
import { UpdateOscDto } from './dto/update-osc.dto';
import { AuthGuard } from 'src/guards/jwt.guard';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { UpdateOscAdressDto } from './dto/update-osc-address.dto';
import { use } from 'passport';

@Controller('oscs')
export class OscsController {
  constructor(private readonly oscsService: OscsService) {}
  

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createOscDto: CreateOscDto, @Request() req: {user: JwtPayload}) {
    return await this.oscsService.create(createOscDto, req.user.sub);
  }

  @Get()
  async findAll() {
    return await this.oscsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.oscsService.findOne(id);
  }

  @Get('/auth/my')
  @UseGuards(AuthGuard)
  async findUserOscs(@Request() req: {user: JwtPayload}) {
    return await this.oscsService.findUserOscs(req.user.sub);
  }

  @Patch()
  @UseGuards(AuthGuard)
  async update(@Body() updateOscDto: UpdateOscDto, @Request() req: {user: JwtPayload}) {
    return await this.oscsService.update(updateOscDto, req.user.sub);  
  }

  @Patch('address')
  @UseGuards(AuthGuard)
  async updateAddress(@Param('id') id: string, @Body() updateOscDto: UpdateOscAdressDto, @Request() req: {user: JwtPayload}) {
    return await this.oscsService.updateAddress(updateOscDto, req.user.sub);  
  }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.oscsService.remove(id);
  // }
}
