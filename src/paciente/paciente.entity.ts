import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Email } from '../email/email.entity';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn()
  idpaciente: number;

  @Column({ type: 'varchar', length: 45 })
  numero_identificacion: string;

  @Column({ type: 'varchar', length: 100 })
  nombres_paciente: string;

  @Column({ type: 'varchar', length: 45 })
  apellido_paterno: string;

  @Column({ type: 'varchar', length: 45 })
  apellido_materno: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ type: 'varchar', length: 45 })
  telefono: string;

  @Column({ type: 'int' })
  email_idemail: number;

  @ManyToOne(() => Email, (email) => email.pacientes)
  @JoinColumn({ name: 'email_idemail' })
  email: Email;
}
