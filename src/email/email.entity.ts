import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('email')
export class Email {
  @PrimaryGeneratedColumn()
  idemail: number;

  @Column({ type: 'varchar', length: 45 })
  email: string;
}
