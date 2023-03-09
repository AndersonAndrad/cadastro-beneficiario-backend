import { Injectable } from '@nestjs/common';
import { Dependente } from '@prisma/client';
import { IDependenteRepository } from 'src/app/dependente/dependente.repository';
import { CreateDependenteDto } from 'src/app/dependente/dto/create.dto';
import { ISearchDependente } from 'src/app/dependente/dto/search.dto';
import { IUpdateDependente } from 'src/app/dependente/dto/update.dto';
import { PrismaService } from 'src/infra/prisma/Prisma.service';
import { IPagination } from '../../interfaces/pagination.interface';

@Injectable()
export class PrismaDependenteRepository implements IDependenteRepository {
  constructor(private prisma: PrismaService) {}

  async create(dependente: CreateDependenteDto): Promise<void> {
    await this.prisma.dependente.create({
      data: {
        nome: dependente.nome,
        adesao: dependente.adesao,
        modalidade: dependente.modalidade,
        situacao: dependente.situacao,
        titular: { connect: { id: dependente.titularId } },
      },
    });
    return;
  }

  async getDependenteById(dependenteId: string): Promise<Dependente> {
    return await this.prisma.dependente.findUnique({
      where: { id: dependenteId },
    });
  }

  async search({
    pageIndex,
    pageSize,
    ...filter
  }: ISearchDependente): Promise<IPagination<Dependente>> {
    const prismaFilter: Omit<ISearchDependente, 'pageIndex' | 'pageSize'> =
      filter;

    const skip = pageIndex * pageSize;

    const [titulares, totalCount] = await Promise.all([
      this.prisma.dependente.findMany({
        where: prismaFilter,
        skip,
        take: Number(pageSize),
      }),

      this.prisma.dependente.count({
        where: prismaFilter,
      }),
    ]);

    return {
      items: titulares,
      totalCount,
    };
  }

  async update(
    dependenteId: string,
    dependente: IUpdateDependente,
  ): Promise<Dependente> {
    return this.prisma.dependente.update({
      where: { id: dependenteId },
      data: dependente,
    });
  }

  async disableDependente(dependenteId: string): Promise<void> {
    this.prisma.dependente.update({
      where: { id: dependenteId },
      data: { cancelamento: new Date() },
    });
  }

  async enableDependente(dependenteId: string): Promise<void> {
    await this.prisma.dependente.update({
      where: { id: dependenteId },
      data: { cancelamento: null },
    });
  }
}
