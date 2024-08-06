import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CajaInicial } from './caja_inicial.entity';

@Injectable()
export class CajaInicialService {
  constructor(
    @InjectRepository(CajaInicial)
    private cajaInicialRepository: Repository<CajaInicial>,
  ) {}

  findAll(): Promise<CajaInicial[]> {
    return this.cajaInicialRepository.find();
  }

  findOne(id: number): Promise<CajaInicial> {
    return this.cajaInicialRepository.findOneBy({ idcaja_inicial: id });
  }

  async remove(id: number): Promise<void> {
    await this.cajaInicialRepository.delete(id);
  }
}
