import { Injectable } from '@nestjs/common';
import { Dependente } from '@prisma/client';
import { IDependenteRepository } from 'src/app/dependente/dependente.repository';
import { CreateDependenteDto } from 'src/app/dependente/dto/create.dto';
import { PrismaService } from 'src/infra/prisma/Prisma.service';

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
}
