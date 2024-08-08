import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('porcentaje_descuento')
export class PorcentajeDescuento {
  @PrimaryGeneratedColumn()
  idporcentaje_descuento: number;

  @Column({ type: 'varchar', length: 45 })
  nombre_porcentaje: string;

  @Column({ type: 'double precision' })
  porcentaje: number;
}
