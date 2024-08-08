import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('formato_conebeam')
export class FormatoConebeam {
  @PrimaryGeneratedColumn()
  idformato_conebeam: number;

  @Column({ type: 'varchar', length: 45 })
  formato_conebeam: string;
}
