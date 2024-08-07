import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estado_formatorx')
export class EstadoFormatorx {
  @PrimaryGeneratedColumn()
  idestado_formatorx: number;

  @Column({ type: 'varchar', length: 45 })
  estado_formatorx: string;
}
