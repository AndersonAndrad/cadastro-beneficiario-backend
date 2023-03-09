import { Prisma, Titular } from '@prisma/client';

import { Injectable } from '@nestjs/common';
import { ISearchTitular } from 'src/app/titular/dto/search.dto';
import { ITitularRepository } from 'src/app/titular/titular.repository';
import { PrismaService } from 'src/infra/prisma/Prisma.service';
import { IPagination } from '../../interfaces/pagination.interface';

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

  async search({
    pageIndex,
    pageSize,
    ...filter
  }: ISearchTitular): Promise<IPagination<Titular>> {
    const prismaFilter: Omit<ISearchTitular, 'pageIndex' | 'pageSize'> = filter;

    const skip = pageIndex * pageSize;

    const [titulares, totalCount] = await Promise.all([
      this.prisma.titular.findMany({
        where: prismaFilter,
        skip,
        take: Number(pageSize),
      }),

      this.prisma.titular.count({
        where: prismaFilter,
      }),
    ]);

    return {
      items: titulares,
      totalCount,
    };
  }

  async update(
    titularId: string,
    titular: Prisma.TitularUpdateInput,
  ): Promise<Titular> {
    return await this.prisma.titular.update({
      where: { id: titularId },
      data: titular,
    });
  }

  async disableTitular(titularId: string): Promise<void> {
    await this.prisma.titular.update({
      where: { id: titularId },
      data: { cancelamento: new Date() },
    });
  }

  async enableTitular(titularId: string): Promise<void> {
    await this.prisma.titular.update({
      where: { id: titularId },
      data: { cancelamento: null },
    });
  }
}
