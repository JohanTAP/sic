import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ type: 'varchar', length: 45, nullable: true })
  telefono: string;

  @Column({ type: 'int', nullable: true })
  email_idemail: number;
}
