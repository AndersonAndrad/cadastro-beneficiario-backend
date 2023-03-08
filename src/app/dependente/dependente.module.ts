import { Global, Module } from '@nestjs/common';

import { PrismaDependenteRepository } from 'src/infra/data/repositories/dependente/prisma-dependente.repository';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { DependenteController } from './dependente.controller';
import { DEPENDENTE_REPOSITORY } from './dependente.repository';
import { DependenteService } from './dependente.service';

@Global()
@Module({
  imports: [PrismaModule],
  controllers: [DependenteController],
  providers: [
    DependenteService,
    {
      provide: DEPENDENTE_REPOSITORY,
      useClass: PrismaDependenteRepository,
    },
  ],
})
export class DependenteModule {}
