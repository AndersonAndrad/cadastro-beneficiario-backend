import { ModalidadeEnum, SituacaoEnum } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDependenteDto {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  situacao: SituacaoEnum;
  @ApiProperty()
  modalidade: ModalidadeEnum;
  @ApiProperty()
  adesao: Date;
  @ApiProperty()
  cancelamento: Date;
  @ApiProperty()
  titularId: string;
}

export interface ICreateDependenteDto {
  nome: string;
  situacao: SituacaoEnum;
  modalidade: ModalidadeEnum;
  adesao: Date;
  cancelamento: Date;
  titularId: string;
}
