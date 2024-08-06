import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ type: 'integer' })
  ubicacion_idubicacion: number;

  @Column({ type: 'varchar', length: 60 })
  email_empresa: string;
}
