import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  idrol: number;

  @Column({ type: 'varchar', length: 45 })
  tipo_usuario: string;

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];
}
