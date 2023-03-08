import { ModalidadeEnum, SituacaoEnum } from '@prisma/client';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Dependente } from './dependente.entity';

@Entity()
export class Titular {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({
    type: 'enum',
    enum: SituacaoEnum,
  })
  situacao: SituacaoEnum;

  @Column({
    type: 'enum',
    enum: ModalidadeEnum,
  })
  modalidade: ModalidadeEnum;

  @Column({ type: 'datetime', nullable: true })
  adesao: Date;

  @Column({ type: 'datetime', nullable: true })
  cancelamento: Date;

  @OneToMany(() => Dependente, (dependente) => dependente.titular, {
    cascade: true,
    eager: true,
  })
  dependentes: Dependente[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data: Date;
}
