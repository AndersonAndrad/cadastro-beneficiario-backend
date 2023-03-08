import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ITitularRepository } from 'src/app/titular/titular.repository';
import { PrismaService } from 'src/infra/prisma/Prisma.service';

@Injectable()
export class PrismaTitularRepository implements ITitularRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TitularCreateInput): Promise<void> {
    await this.prisma.titular.create({ data });
    return;
  }
}
