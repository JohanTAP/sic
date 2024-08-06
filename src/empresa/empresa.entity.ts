import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UbicacionEmpresa } from '../ubicacion_empresa/ubicacion_empresa.entity';

@Entity('empresa')
export class Empresa {
  @PrimaryGeneratedColumn()
  idempresa: number;

  @Column({ type: 'integer' })
  telefono_empresa: number;

  @Column({ type: 'varchar', length: 45 })
  rut_empresa: string;

  @Column({ type: 'varchar', length: 100 })
  giro_empresa: string;

  @Column({ type: 'varchar', length: 45 })
  actividad: string;

  @Column({ type: 'int' })
  ubicacion_idubicacion: number;

  @Column({ type: 'varchar', length: 60 })
  email_empresa: string;

  @ManyToOne(
    () => UbicacionEmpresa,
    (ubicacionEmpresa) => ubicacionEmpresa.empresas,
  )
  @JoinColumn({ name: 'ubicacion_idubicacion' })
  ubicacionEmpresa: UbicacionEmpresa;
}
