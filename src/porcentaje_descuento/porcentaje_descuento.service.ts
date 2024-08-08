import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PorcentajeDescuento } from './porcentaje_descuento.entity';

@Injectable()
export class PorcentajeDescuentoService {
  constructor(
    @InjectRepository(PorcentajeDescuento)
    private porcentajeDescuentoRepository: Repository<PorcentajeDescuento>,
  ) {}

  findAll(): Promise<PorcentajeDescuento[]> {
    return this.porcentajeDescuentoRepository.find();
  }

  findOne(id: number): Promise<PorcentajeDescuento> {
    return this.porcentajeDescuentoRepository.findOneBy({
      idporcentaje_descuento: id,
    });
  }

  async remove(id: number): Promise<void> {
    await this.porcentajeDescuentoRepository.delete(id);
  }
}
