import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DependenteService } from './dependente.service';
import { CreateDependenteDto } from './dto/create.dto';
import { SearchDependenteDto } from './dto/search.dto';
import { UpdateDependenteDto } from './dto/update.dto';

@ApiTags('Dependente')
@Controller('dependente')
export class DependenteController {
  constructor(private dependenteService: DependenteService) {}

  @Post()
  create(@Body() createDependenteDto: CreateDependenteDto) {
    this.dependenteService.create(createDependenteDto);
  }

  @Get()
  search(@Query() filter: SearchDependenteDto) {
    return this.dependenteService.search(filter);
  }

  @Get(':dependenteId')
  getDependenteById(@Param('dependenteId') dependenteId: string) {
    return this.dependenteService.getDependenteById(dependenteId);
  }

  @Put(':dependenteId')
  update(
    @Param('dependenteId') dependenteId: string,
    @Body() updateDependenteDto: UpdateDependenteDto,
  ) {
    return this.dependenteService.update(dependenteId, updateDependenteDto);
  }

  @Patch('disable/:dependenteId')
  desactiveTitular(@Param('dependenteId') dependenteId: string) {
    this.dependenteService.disableDependente(dependenteId);
  }

  @Patch('enable/:dependenteId')
  enableDependente(@Param('dependenteId') dependenteId: string) {
    this.dependenteService.enableDependente(dependenteId);
  }
}
