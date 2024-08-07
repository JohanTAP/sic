import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsistenteDental } from './asistente_dental.entity';

@Injectable()
export class AsistenteDentalService {
  constructor(
    @InjectRepository(AsistenteDental)
    private asistenteDentalRepository: Repository<AsistenteDental>,
  ) {}

  findAll(): Promise<AsistenteDental[]> {
    return this.asistenteDentalRepository.find({
      relations: ['ubicacionEmpresa', 'estado'],
    });
  }

  findOne(id: number): Promise<AsistenteDental> {
    return this.asistenteDentalRepository.findOneBy({ idasistente_dental: id });
  }

  async remove(id: number): Promise<void> {
    await this.asistenteDentalRepository.delete(id);
  }
}
