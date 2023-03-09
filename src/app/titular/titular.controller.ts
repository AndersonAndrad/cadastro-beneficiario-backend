import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTitularDto } from './dto/create.dto';
import { SearchTitularDto } from './dto/search.dto';
import { UpdateTitularDto } from './dto/update.dto';

import { TitularService } from './titular.service';

@ApiTags('Titular')
@Controller('titular')
export class TitularController {
  constructor(private titularService: TitularService) {}

  @Post()
  async create(@Body() createTitularDto: CreateTitularDto) {
    this.titularService.create(createTitularDto);
  }

  @Get()
  async search(@Query() searchTitularDto: SearchTitularDto) {
    return this.titularService.search(searchTitularDto);
  }

  @Get(':titularId')
  async getTitularById(@Param('titularId') titularId: string) {
    return this.titularService.getTitularById(titularId);
  }

  @Put(':titularId')
  async update(
    @Param('titularId') titularId: string,
    @Body() titular: UpdateTitularDto,
  ) {
    this.titularService.update(titularId, titular);
  }
}
