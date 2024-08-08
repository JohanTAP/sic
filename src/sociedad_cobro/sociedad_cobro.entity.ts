import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UbicacionEmpresa } from '../ubicacion_empresa/ubicacion_empresa.entity';

@Entity('sociedad_cobro')
export class SociedadCobro {
  @PrimaryGeneratedColumn()
  idsociedad_cobro: number;

  @Column({ type: 'varchar', length: 50 })
  nombre_empresa: string;

  @Column({ type: 'int' })
  ubicacion_empresa_idubicacion_empresa: number;

  @ManyToOne(
    () => UbicacionEmpresa,
    (ubicacionEmpresa) => ubicacionEmpresa.sociedadesCobro,
  )
  @JoinColumn({ name: 'ubicacion_empresa_idubicacion_empresa' })
  ubicacionEmpresa: UbicacionEmpresa;
}
