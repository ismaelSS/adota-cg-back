import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, Query } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';
import { AuthGuard } from 'src/guards/jwt.guard';
import { AdoptionDto } from './dto/adoption.dto';
import { SearchDto } from './dto/search.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createAnimalDto: CreateAnimalDto, @Request() req: {user: JwtPayload}) {
    return await this.animalsService.register(createAnimalDto, req.user.sub);
  }

  @Get()
  async findAll() {
    return await this.animalsService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.animalsService.findOne(id);
  }

  @Get('/osc/animals')
  @UseGuards(AuthGuard)
  async findAllAnimalOsc(@Request() req: {user: JwtPayload}) {
    return await this.animalsService.findAllAnimalOsc(req.user.sub);
  }

  @Post('adopt/:id')
  @UseGuards(AuthGuard)
  async adoption(@Param('id') id: string, @Body() adoptionDto: AdoptionDto, @Request() req: {user: JwtPayload}) {
    return await this.animalsService.adoption(id, adoptionDto, req.user.sub);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto, @Request() req: {user: JwtPayload}) {
    return this.animalsService.update(id, updateAnimalDto, req.user.sub);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string, @Request() req: {user: JwtPayload}) {
    return this.animalsService.remove(id, req.user.sub);
  }

  @Get('search/result')
  search(@Query() searchDto: SearchDto) {
    return this.animalsService.search(searchDto);
  }
}
