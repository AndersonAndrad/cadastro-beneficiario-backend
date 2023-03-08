import { CreateDependenteDto } from './dto/create.dto';

export const DEPENDENTE_REPOSITORY = Symbol('dependente_repository');

export interface IDependenteRepository {
  create(dependente: CreateDependenteDto): Promise<void>;
}
