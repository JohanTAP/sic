import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Usuario } from '../usuario/usuario.entity';
import { NombreDescuento } from '../nombre_descuento/nombre_descuento.entity';
import { SociedadCobro } from '../sociedad_cobro/sociedad_cobro.entity';

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

  @OneToMany(() => Usuario, (usuario) => usuario.ubicacionEmpresa)
  usuarios: Usuario[];

  @OneToMany(() => Empresa, (empresa) => empresa.ubicacionEmpresa)
  empresas: Empresa[];

  @OneToMany(
    () => NombreDescuento,
    (nombreDescuento) => nombreDescuento.ubicacionEmpresa,
  )
  nombreDescuentos: NombreDescuento[];

  @OneToMany(
    () => SociedadCobro,
    (sociedadCobro) => sociedadCobro.ubicacionEmpresa,
  )
  sociedadesCobro: SociedadCobro[];
}
