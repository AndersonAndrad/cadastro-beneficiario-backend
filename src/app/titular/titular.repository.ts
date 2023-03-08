import { Prisma } from '@prisma/client';

export const TITULAR_REPOSITORY = Symbol('titular_repository');

export interface ITitularRepository {
  create(titular: Prisma.TitularCreateInput): Promise<void>;
}
