import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('registro')
export class Registro {
  @PrimaryColumn({ type: 'int' })
  id_usuario: number;

  @PrimaryColumn({ type: 'date' })
  fecha: Date;

  @PrimaryColumn({ type: 'time without time zone' })
  hora: string;

  @Column({ type: 'varchar', length: 300 })
  descripcion: string;
}
