import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ubicacion_empresa')
export class UbicacionEmpresa {
  @PrimaryGeneratedColumn()
  idubicacion_empresa: number;

  @Column({ type: 'varchar', length: 500 })
  direccion: string;

  @Column({ type: 'varchar', length: 45 })
  comuna: string;

  @Column({ type: 'varchar', length: 45 })
  ciudad: string;

  @Column({ type: 'varchar', length: 45 })
  region: string;

  @Column({ type: 'varchar', length: 45 })
  sucursal: string;

  @Column({ type: 'varchar', length: 200 })
  link_mapa: string;

  @Column({ type: 'varchar', length: 45 })
  codigo_sii: string;
}
