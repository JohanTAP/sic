import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('estado')
export class Estado {
  @PrimaryGeneratedColumn()
  idestado: number;

  @Column({ type: 'varchar', length: 45 })
  tipo_estado: string;

  @Column({ type: 'varchar', length: 45 })
  uso_estado: string;

  @OneToMany(() => Usuario, (usuario) => usuario.estado)
  usuarios: Usuario[];
}
