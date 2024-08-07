import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('formatorx')
export class Formatorx {
  @PrimaryGeneratedColumn()
  idformatorx: number;

  @Column({ type: 'varchar', length: 45 })
  formatorx: string;
}
