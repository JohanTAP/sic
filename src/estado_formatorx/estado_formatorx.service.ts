import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoFormatorx } from './estado_formatorx.entity';

@Injectable()
export class EstadoFormatorxService {
  constructor(
    @InjectRepository(EstadoFormatorx)
    private estadoFormatorxRepository: Repository<EstadoFormatorx>,
  ) {}

  findAll(): Promise<EstadoFormatorx[]> {
    return this.estadoFormatorxRepository.find();
  }

  findOne(id: number): Promise<EstadoFormatorx> {
    return this.estadoFormatorxRepository.findOneBy({ idestado_formatorx: id });
  }

  async remove(id: number): Promise<void> {
    await this.estadoFormatorxRepository.delete(id);
  }
}
