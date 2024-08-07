import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Prestaciones } from '../prestaciones/prestaciones.entity';
import { UbicacionEmpresa } from '../ubicacion_empresa/ubicacion_empresa.entity';

@Entity('nombre_descuento')
export class NombreDescuento {
  @PrimaryGeneratedColumn()
  idnombre_descuento: number;

  @Column({ type: 'varchar', length: 100 })
  tipo_descuento: string;

  @Column({ type: 'double precision' })
  precio: number;

  @Column({ type: 'int' })
  prestaciones_idprestaciones: number;

  @Column({ type: 'int' })
  ubicacion_empresa_idubicacion_empresa: number;

  @ManyToOne(
    () => Prestaciones,
    (prestaciones) => prestaciones.nombreDescuentos,
  )
  @JoinColumn({ name: 'prestaciones_idprestaciones' })
  prestaciones: Prestaciones;

  @ManyToOne(
    () => UbicacionEmpresa,
    (ubicacionEmpresa) => ubicacionEmpresa.nombreDescuentos,
  )
  @JoinColumn({ name: 'ubicacion_empresa_idubicacion_empresa' })
  ubicacionEmpresa: UbicacionEmpresa;
}
