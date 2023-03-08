import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { ITitularRepository, TITULAR_REPOSITORY } from './titular.repository';

@Injectable()
export class TitularService {
  constructor(
    @Inject(TITULAR_REPOSITORY) private titularRepository: ITitularRepository,
  ) {}

  async create(titular: Prisma.TitularCreateInput) {
    this.titularRepository.create(titular);
  }
}
