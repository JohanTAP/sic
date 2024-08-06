import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
