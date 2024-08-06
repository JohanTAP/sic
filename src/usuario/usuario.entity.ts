import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from '../rol/rol.entity';
import { UbicacionEmpresa } from '../ubicacion_empresa/ubicacion_empresa.entity';
import { Estado } from '../estado/estado.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  idusuario: number;

  @Column({ type: 'varchar', length: 45 })
  username: string;

  @Column({ type: 'varchar', length: 45 })
  password: string;

  @Column({ type: 'int', nullable: true })
  rol_idrol: number;

  @Column({ type: 'int', nullable: true })
  estado_idestado: number;

  @Column({ type: 'int', nullable: true })
  ubicacion_empresa_idubicacion_empresa: number;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  @JoinColumn({ name: 'rol_idrol' })
  rol: Rol;

  @ManyToOne(() => Estado, (estado) => estado.usuarios)
  @JoinColumn({ name: 'estado_idestado' })
  estado: Estado;

  @ManyToOne(
    () => UbicacionEmpresa,
    (ubicacionEmpresa) => ubicacionEmpresa.usuarios,
  )
  @JoinColumn({ name: 'ubicacion_empresa_idubicacion_empresa' })
  ubicacionEmpresa: UbicacionEmpresa;
}
