import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Prestaciones } from '../prestaciones/prestaciones.entity';

@Entity('categoria_prestaciones')
export class CategoriaPrestaciones {
  @PrimaryGeneratedColumn()
  idcategoria_prestacion: number;

  @Column({ type: 'varchar', length: 45 })
  nombre_categoria: string;

  @OneToMany(
    () => Prestaciones,
    (prestaciones) => prestaciones.categoriaPrestaciones,
  )
  prestaciones: Prestaciones[];
}
