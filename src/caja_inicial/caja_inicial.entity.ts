import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { UbicacionEmpresa } from '../ubicacion_empresa/ubicacion_empresa.entity';

@Entity('caja_inicial')
export class CajaInicial {
  @PrimaryGeneratedColumn()
  idcaja_inicial: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'double precision' })
  monto_inicial: number;

  @Column({ type: 'varchar', length: 45 })
  estado: string;

  @Column({ type: 'double precision' })
  monto_cierre: number;

  @Column({ type: 'int', nullable: true })
  usuario_idusuario: number;

  @Column({ type: 'int', nullable: true })
  ubicacion_empresa_idubicacion_empresa: number;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'usuario_idusuario' })
  usuario: Usuario;

  @ManyToOne(() => UbicacionEmpresa, { nullable: true })
  @JoinColumn({ name: 'ubicacion_empresa_idubicacion_empresa' })
  ubicacionEmpresa: UbicacionEmpresa;

  @Column({ type: 'date', nullable: true })
  fecha_cierre: Date;

  @Column({ type: 'time without time zone', nullable: true })
  hora_cierre: string;

  @Column({ type: 'double precision', nullable: true })
  efectivo: number;

  @Column({ type: 'double precision', nullable: true })
  tarjeta: number;

  @Column({ type: 'double precision', nullable: true })
  otro_medio: number;

  @Column({ type: 'timestamp without time zone', nullable: true })
  fechahora_creacion: Date;

  @Column({ type: 'varchar', length: 500, nullable: true })
  comentario: string;
}
