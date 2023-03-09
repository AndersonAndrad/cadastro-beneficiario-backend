import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DependenteService } from './dependente.service';
import { CreateDependenteDto } from './dto/create.dto';
import { SearchDependenteDto } from './dto/search.dto';

@ApiTags('Dependente')
@Controller('dependente')
export class DependenteController {
  constructor(private dependenteService: DependenteService) {}

  @Post()
  async create(@Body() createDependenteDto: CreateDependenteDto) {
    this.dependenteService.create(createDependenteDto);
  }

  @Get()
  search(@Query() filter: SearchDependenteDto) {
    return this.dependenteService.search(filter);
  }

  @Get(':dependenteId')
  async getDependenteById(@Param('dependenteId') dependenteId: string) {
    return this.dependenteService.getDependenteById(dependenteId);
  }
}
