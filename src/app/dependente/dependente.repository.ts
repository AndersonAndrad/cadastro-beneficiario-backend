import { Dependente } from '@prisma/client';
import { CreateDependenteDto } from './dto/create.dto';

export const DEPENDENTE_REPOSITORY = Symbol('dependente_repository');

export interface IDependenteRepository {
  create(dependente: CreateDependenteDto): Promise<void>;

  getDependenteById(dependenteId: string): Promise<Dependente>;
}
