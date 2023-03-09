import { Dependente } from '@prisma/client';

import { IPagination } from 'src/infra/data/interfaces/pagination.interface';
import { CreateDependenteDto } from './dto/create.dto';
import { ISearchDependente } from './dto/search.dto';
import { IUpdateDependente } from './dto/update.dto';

export const DEPENDENTE_REPOSITORY = Symbol('dependente_repository');

export interface IDependenteRepository {
  create(dependente: CreateDependenteDto): Promise<void>;

  getDependenteById(dependenteId: string): Promise<Dependente>;

  search(filter: ISearchDependente): Promise<IPagination<Dependente>>;

  update(
    dependenteId: string,
    dependente: IUpdateDependente,
  ): Promise<Dependente>;
}
