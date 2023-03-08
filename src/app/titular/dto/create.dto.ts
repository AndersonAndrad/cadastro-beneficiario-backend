import { ModalidadeEnum, Prisma, SituacaoEnum } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

export class CreateTitularDto implements Prisma.TitularCreateInput {
  @ApiProperty()
  nome: string;
  @ApiProperty({ example: SituacaoEnum.ativo })
  situacao: SituacaoEnum;
  @ApiProperty({ example: ModalidadeEnum.mensalidade })
  modalidade: ModalidadeEnum;
  @ApiProperty()
  adesao: Date;
  @ApiProperty()
  cancelamento: Date;
  @ApiProperty()
  data: Date;
}
