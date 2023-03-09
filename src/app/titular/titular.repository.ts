import { Prisma, Titular } from '@prisma/client';

import { IPagination } from 'src/infra/data/interfaces/pagination.interface';
import { ISearchTitular } from './dto/search.dto';

export const TITULAR_REPOSITORY = Symbol('titular_repository');

export interface ITitularRepository {
  create(titular: Prisma.TitularCreateInput): Promise<void>;

  getTitularById(titularId: string): Promise<Titular>;

  search(filter: ISearchTitular): Promise<IPagination<Titular>>;
}
