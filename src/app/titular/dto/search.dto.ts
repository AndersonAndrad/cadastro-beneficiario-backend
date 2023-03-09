import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ModalidadeEnum, SituacaoEnum } from '@prisma/client';

import { IPaginate } from 'src/infra/data/interfaces/pagination.interface';

export class SearchTitularDto implements ISearchTitular {
  /* Optionals */
  @ApiPropertyOptional()
  modalidade?: ModalidadeEnum;
  @ApiPropertyOptional()
  situacao?: SituacaoEnum;
  @ApiPropertyOptional()
  nome?: string;

  /* Required */
  @ApiProperty({ example: 10 })
  pageSize: number;
  @ApiProperty({ example: 0 })
  pageIndex: number;
}

export interface ISearchTitular extends IPaginate {
  modalidade?: ModalidadeEnum;
  situacao?: SituacaoEnum;
  nome?: string;
}
