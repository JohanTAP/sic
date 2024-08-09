import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackEspecial } from './pack_especial.entity';

@Injectable()
export class PackEspecialService {
  constructor(
    @InjectRepository(PackEspecial)
    private packEspecialRepository: Repository<PackEspecial>,
  ) {}

  findAll(): Promise<PackEspecial[]> {
    return this.packEspecialRepository.find({
      relations: [
        'categoriaPrestaciones',
        'ubicacionEmpresa',
        'packEspecialHasPrestaciones',
      ],
    });
  }

  findOne(id: number): Promise<PackEspecial> {
    return this.packEspecialRepository.findOne({
      where: { idpack_especial: id },
      relations: [
        'categoriaPrestaciones',
        'ubicacionEmpresa',
        'packEspecialHasPrestaciones',
      ],
    });
  }
}
