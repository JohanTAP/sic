import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  findOne(id: number): Promise<Empresa> {
    return this.empresaRepository.findOneBy({ idempresa: id });
  }

  async remove(id: number): Promise<void> {
    await this.empresaRepository.delete(id);
  }
}
