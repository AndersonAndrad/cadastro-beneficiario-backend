import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTitularDto } from './dto/create.dto';

import { TitularService } from './titular.service';

@ApiTags('Titular')
@Controller('titular')
export class TitularController {
  constructor(private titularService: TitularService) {}

  @Post()
  async create(@Body() createTitularDto: CreateTitularDto) {
    this.titularService.create(createTitularDto);
  }
}
