import { Prisma, Titular } from '@prisma/client';

import { Injectable } from '@nestjs/common';
import { ITitularRepository } from 'src/app/titular/titular.repository';
import { PrismaService } from 'src/infra/prisma/Prisma.service';

@Injectable()
export class PrismaTitularRepository implements ITitularRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TitularCreateInput): Promise<void> {
    await this.prisma.titular.create({ data });
    return;
  }

  async getTitularById(titularId: string): Promise<Titular> {
    return this.prisma.titular.findUnique({ where: { id: titularId } });
  }
}
