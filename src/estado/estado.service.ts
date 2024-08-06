import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './estado.entity';

@Injectable()
export class EstadoService {
  constructor(
    @InjectRepository(Estado)
    private estadoRepository: Repository<Estado>,
  ) {}

  findAll(): Promise<Estado[]> {
    return this.estadoRepository.find();
  }

  findOne(id: number): Promise<Estado> {
    return this.estadoRepository.findOneBy({ idestado: id });
  }

  async remove(id: number): Promise<void> {
    await this.estadoRepository.delete(id);
  }
}
