import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctor')
export class Doctor {
  @PrimaryGeneratedColumn()
  iddoctor: number;

  @Column({ type: 'varchar', length: 45 })
  nombre: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 45 })
  forma_atender: string;

  @Column({ type: 'varchar', length: 45 })
  estado: string;
}
