import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { PackEspecial } from '../pack_especial/pack_especial.entity';
import { Prestaciones } from '../prestaciones/prestaciones.entity';

@Entity('pack_especial_has_prestaciones')
export class PackEspecialHasPrestaciones {
  @PrimaryColumn()
  pack_especial_idpack_especial: number;

  @PrimaryColumn()
  prestaciones_idprestaciones: number;

  @ManyToOne(
    () => PackEspecial,
    (packEspecial) => packEspecial.packEspecialHasPrestaciones,
  )
  @JoinColumn({ name: 'pack_especial_idpack_especial' })
  packEspecial: PackEspecial;

  @ManyToOne(
    () => Prestaciones,
    (prestaciones) => prestaciones.packEspecialHasPrestaciones,
  )
  @JoinColumn({ name: 'prestaciones_idprestaciones' })
  prestaciones: Prestaciones;

  @Column({ type: 'int' })
  cantidad: number;
}
