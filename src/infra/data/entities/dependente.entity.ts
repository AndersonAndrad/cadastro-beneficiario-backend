import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModalidadeEnum, SituacaoEnum } from '@prisma/client';

import { Titular } from './titular.entity';

@Entity()
export class Dependente {
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

  @Column()
  adesao: Date;

  @Column({
    nullable: true,
  })
  cancelamento?: Date;

  @ManyToOne(() => Titular, (titular) => titular.dependentes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'titularId' })
  titular: Titular;

  @Column()
  titularId: string;

  @Column({ default: () => 'now()' })
  data: Date;
}
