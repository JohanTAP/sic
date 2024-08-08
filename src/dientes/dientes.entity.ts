import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dientes')
export class Dientes {
  @PrimaryGeneratedColumn()
  iddientes: number;

  @Column({ type: 'varchar', length: 500 })
  num_letra: string;

  @Column({ type: 'double precision' })
  num_dientes: number;

  @Column({ type: 'varchar', length: 45 })
  tipo_paciente: string;
}
