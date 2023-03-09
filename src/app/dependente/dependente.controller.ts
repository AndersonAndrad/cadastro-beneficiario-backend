import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DependenteService } from './dependente.service';
import { CreateDependenteDto } from './dto/create.dto';

@ApiTags('Dependente')
@Controller('dependente')
export class DependenteController {
  constructor(private dependenteService: DependenteService) {}

  @Post()
  async create(@Body() createDependenteDto: CreateDependenteDto) {
    this.dependenteService.create(createDependenteDto);
  }
}
