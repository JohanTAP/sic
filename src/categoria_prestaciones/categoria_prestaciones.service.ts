import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaPrestaciones } from './categoria_prestaciones.entity';

@Injectable()
export class CategoriaPrestacionesService {
  constructor(
    @InjectRepository(CategoriaPrestaciones)
    private categoriaPrestacionesRepository: Repository<CategoriaPrestaciones>,
  ) {}

  findAll(): Promise<CategoriaPrestaciones[]> {
    return this.categoriaPrestacionesRepository.find();
  }

  findOne(id: number): Promise<CategoriaPrestaciones> {
    return this.categoriaPrestacionesRepository.findOne({
      where: { idcategoria_prestacion: id },
      relations: ['prestaciones'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.categoriaPrestacionesRepository.delete(id);
  }
}
