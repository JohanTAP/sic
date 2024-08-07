import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CategoriaPrestaciones } from '../categoria_prestaciones/categoria_prestaciones.entity';
import { NombreDescuento } from '../nombre_descuento/nombre_descuento.entity';

@Entity('prestaciones')
export class Prestaciones {
  @PrimaryGeneratedColumn()
  idprestaciones: number;

  @Column({ type: 'int' })
  categoria_prestacion_idcategoria_prestacion: number;

  @Column({ type: 'varchar', length: 500 })
  nombre_prestacion: string;

  @Column({ type: 'varchar', length: 45 })
  codigo: string;

  @ManyToOne(() => CategoriaPrestaciones, (categoria) => categoria.prestaciones)
  @JoinColumn({ name: 'categoria_prestacion_idcategoria_prestacion' })
  categoriaPrestaciones: CategoriaPrestaciones;

  @OneToMany(
    () => NombreDescuento,
    (nombreDescuento) => nombreDescuento.prestaciones,
  )
  nombreDescuentos: NombreDescuento[];
}
