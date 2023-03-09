import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ISearchTitular } from './dto/search.dto';

import { ITitularRepository, TITULAR_REPOSITORY } from './titular.repository';

@Injectable()
export class TitularService {
  constructor(
    @Inject(TITULAR_REPOSITORY) private titularRepository: ITitularRepository,
  ) {}

  async create(titular: Prisma.TitularCreateInput) {
    this.titularRepository.create(titular);
  }

  async getTitularById(titularId: string) {
    return this.titularRepository.getTitularById(titularId);
  }

  async search(filter: ISearchTitular) {
    return this.titularRepository.search(filter);
  }

  async update(titularId: string, titular: Prisma.TitularUpdateInput) {
    return this.titularRepository.update(titularId, titular);
  }

  disableTitular(titularId: string) {
    this.titularRepository.disableTitular(titularId);
  }

  async enableTitular(titularId: string) {
    this.titularRepository.enableTitular(titularId);
  }
}
