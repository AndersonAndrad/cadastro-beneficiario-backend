import { Global, Module } from '@nestjs/common';

import { PrismaTitularRepository } from 'src/infra/data/repositories/titular/prisma-titular.repository';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { TitularController } from './titular.controller';
import { TITULAR_REPOSITORY } from './titular.repository';
import { TitularService } from './titular.service';

@Global()
@Module({
  imports: [PrismaModule],
  controllers: [TitularController],
  providers: [
    TitularService,
    {
      provide: TITULAR_REPOSITORY,
      useClass: PrismaTitularRepository,
    },
  ],
})
export class TitularModule {}
