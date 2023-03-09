import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ModalidadeEnum, SituacaoEnum } from '@prisma/client';

import { IPaginate } from 'src/infra/data/interfaces/pagination.interface';

export class SearchDependenteDto implements ISearchDependente {
  /* Optionals */
  @ApiPropertyOptional({ enum: ModalidadeEnum })
  modalidade?: ModalidadeEnum;
  @ApiPropertyOptional({ enum: SituacaoEnum })
  situacao?: SituacaoEnum;
  @ApiPropertyOptional()
  nome?: string;
  @ApiPropertyOptional()
  titularId?: string;

  /* Required */
  @ApiProperty({ example: 10 })
  pageSize: number;
  @ApiProperty({ example: 0 })
  pageIndex: number;
}

export interface ISearchDependente extends IPaginate {
  modalidade?: ModalidadeEnum;
  situacao?: SituacaoEnum;
  nome?: string;
  titularId?: string;
}
