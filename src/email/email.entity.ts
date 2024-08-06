import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Paciente } from '../paciente/paciente.entity';

@Entity('email')
export class Email {
  @PrimaryGeneratedColumn()
  idemail: number;

  @Column({ type: 'varchar', length: 45 })
  email: string;

  @OneToMany(() => Paciente, (paciente) => paciente.email)
  pacientes: Paciente[];
}
