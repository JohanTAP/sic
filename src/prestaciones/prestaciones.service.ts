import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestaciones } from './prestaciones.entity';

@Injectable()
export class PrestacionesService {
  constructor(
    @InjectRepository(Prestaciones)
    private prestacionesRepository: Repository<Prestaciones>,
  ) {}

  findAll(): Promise<Prestaciones[]> {
    return this.prestacionesRepository.find();
  }

  findOne(id: number): Promise<Prestaciones> {
    return this.prestacionesRepository.findOne({
      where: { idprestaciones: id },
      relations: ['categoriaPrestaciones', 'nombreDescuentos'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.prestacionesRepository.delete(id);
  }
}
