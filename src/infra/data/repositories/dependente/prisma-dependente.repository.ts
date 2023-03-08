import { Injectable } from '@nestjs/common';
import { IDependenteRepository } from 'src/app/beneficiario/dependente.repository';
import { CreateDependenteDto } from 'src/app/beneficiario/dto/create.dto';
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
}
