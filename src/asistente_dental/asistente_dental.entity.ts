import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UbicacionEmpresa } from '../ubicacion_empresa/ubicacion_empresa.entity';
import { Estado } from '../estado/estado.entity';

@Entity('asistente_dental')
export class AsistenteDental {
  @PrimaryGeneratedColumn()
  idasistente_dental: number;

  @Column({ type: 'varchar', length: 45 })
  nombre_asistente_dental: string;

  @ManyToOne(() => UbicacionEmpresa, { nullable: true })
  @JoinColumn({ name: 'ubicacion_empresa_idubicacion_empresa' })
  ubicacionEmpresa: UbicacionEmpresa;

  @ManyToOne(() => Estado, { nullable: true })
  @JoinColumn({ name: 'estado_idestado' })
  estado: Estado;
}
