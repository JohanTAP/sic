import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  idrol: number;

  @Column({ type: 'varchar', length: 45 })
  tipo_usuario: string;
}
