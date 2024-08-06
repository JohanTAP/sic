import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

@Entity('registro')
export class Registro {
  @PrimaryColumn({ type: 'int' })
  id_usuario: number;

  @PrimaryColumn({ type: 'date' })
  fecha: Date;

  @PrimaryColumn({ type: 'time without time zone' })
  hora: string;

  @Column({ type: 'varchar', length: 300 })
  descripcion: string;

  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
