import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackEspecialHasPrestaciones } from './pack_especial_has_prestaciones.entity';

@Injectable()
export class PackEspecialHasPrestacionesService {
  constructor(
    @InjectRepository(PackEspecialHasPrestaciones)
    private packEspecialHasPrestacionesRepository: Repository<PackEspecialHasPrestaciones>,
  ) {}

  findAll(): Promise<PackEspecialHasPrestaciones[]> {
    return this.packEspecialHasPrestacionesRepository.find({
      relations: ['packEspecial', 'prestaciones'],
    });
  }

  findOne(
    packEspecialId: number,
    prestacionesId: number,
  ): Promise<PackEspecialHasPrestaciones> {
    return this.packEspecialHasPrestacionesRepository.findOne({
      where: {
        packEspecial: { idpack_especial: packEspecialId },
        prestaciones: { idprestaciones: prestacionesId },
      },
      relations: ['packEspecial', 'prestaciones'],
    });
  }
}
