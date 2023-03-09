import { ModalidadeEnum, SituacaoEnum } from '@prisma/client';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateDependenteDto implements IUpdateDependente {
  @ApiPropertyOptional()
  nome?: string;
  @ApiPropertyOptional()
  modalidade?: ModalidadeEnum;
  @ApiPropertyOptional()
  situacao?: SituacaoEnum;
  @ApiPropertyOptional()
  titularId?: string;
}

export interface IUpdateDependente {
  nome?: string;
  situacao?: SituacaoEnum;
  modalidade?: ModalidadeEnum;
  titularId?: string;
}
