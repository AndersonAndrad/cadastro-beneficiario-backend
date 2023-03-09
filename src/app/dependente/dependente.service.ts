import { Inject, Injectable } from '@nestjs/common';
import {
  DEPENDENTE_REPOSITORY,
  IDependenteRepository,
} from './dependente.repository';
import { CreateDependenteDto } from './dto/create.dto';

@Injectable()
export class DependenteService {
  constructor(
    @Inject(DEPENDENTE_REPOSITORY)
    private dependenteRepository: IDependenteRepository,
  ) {}

  create(createDependenteDto: CreateDependenteDto) {
    this.dependenteRepository.create(createDependenteDto);
  }

  getDependenteById(dependenteId: string) {
    return this.dependenteRepository.getDependenteById(dependenteId);
  }
}
