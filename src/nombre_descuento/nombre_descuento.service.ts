import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NombreDescuento } from './nombre_descuento.entity';

@Injectable()
export class NombreDescuentoService {
  constructor(
    @InjectRepository(NombreDescuento)
    private nombreDescuentoRepository: Repository<NombreDescuento>,
  ) {}

  findAll(): Promise<NombreDescuento[]> {
    return this.nombreDescuentoRepository.find({
      relations: [
        'prestaciones',
        'prestaciones.categoriaPrestaciones',
        'ubicacionEmpresa',
      ],
    });
  }

  findOne(id: number): Promise<NombreDescuento> {
    return this.nombreDescuentoRepository.findOne({
      where: { idnombre_descuento: id },
      relations: [
        'prestaciones',
        'prestaciones.categoriaPrestaciones',
        'ubicacionEmpresa',
      ],
    });
  }

  async remove(id: number): Promise<void> {
    await this.nombreDescuentoRepository.delete(id);
  }
}
