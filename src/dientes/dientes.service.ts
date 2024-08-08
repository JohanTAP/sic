import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dientes } from './dientes.entity';

@Injectable()
export class DientesService {
  constructor(
    @InjectRepository(Dientes)
    private dientesRepository: Repository<Dientes>,
  ) {}

  findAll(): Promise<Dientes[]> {
    return this.dientesRepository.find();
  }

  findOne(id: number): Promise<Dientes> {
    return this.dientesRepository.findOneBy({ iddientes: id });
  }

  async remove(id: number): Promise<void> {
    await this.dientesRepository.delete(id);
  }
}
