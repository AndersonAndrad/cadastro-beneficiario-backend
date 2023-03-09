import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTitularDto } from './dto/create.dto';
import { SearchTitularDto } from './dto/search.dto';

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
}
