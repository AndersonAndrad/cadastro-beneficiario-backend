import { ModalidadeEnum, Prisma, SituacaoEnum } from '@prisma/client';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTitularDto implements Prisma.TitularUpdateInput {
  @ApiPropertyOptional()
  nome?: string;
  @ApiPropertyOptional()
  modalidade?: ModalidadeEnum;
  @ApiPropertyOptional()
  situacao?: SituacaoEnum;
}
