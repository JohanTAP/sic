import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { CategoriaPrestaciones } from '../categoria_prestaciones/categoria_prestaciones.entity';
import { UbicacionEmpresa } from '../ubicacion_empresa/ubicacion_empresa.entity';
import { PackEspecialHasPrestaciones } from '../pack_especial_has_prestaciones/pack_especial_has_prestaciones.entity';

@Entity('pack_especial')
export class PackEspecial {
  @PrimaryGeneratedColumn()
  idpack_especial: number;

  @Column({ type: 'varchar', length: 45 })
  codigo_pack: string;

  @Column({ type: 'varchar', length: 200 })
  nombre_pack: string;

  @Column({ type: 'int' })
  precio_pack: number;

  @ManyToOne(() => CategoriaPrestaciones, (categoria) => categoria.prestaciones)
  @JoinColumn({ name: 'categoria_prestacion_idcategoria_prestacion' })
  categoriaPrestaciones: CategoriaPrestaciones;

  @ManyToOne(
    () => UbicacionEmpresa,
    (ubicacionEmpresa) => ubicacionEmpresa.packsEspeciales,
  )
  @JoinColumn({ name: 'ubicacion_empresa_idubicacion_empresa' })
  ubicacionEmpresa: UbicacionEmpresa;

  @OneToMany(
    () => PackEspecialHasPrestaciones,
    (packEspecialHasPrestaciones) => packEspecialHasPrestaciones.packEspecial,
  )
  packEspecialHasPrestaciones: PackEspecialHasPrestaciones[];
}
