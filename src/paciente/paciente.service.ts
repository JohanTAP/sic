import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  findOne(id: number): Promise<Paciente> {
    return this.pacienteRepository.findOneBy({ idpaciente: id });
  }

  async remove(id: number): Promise<void> {
    await this.pacienteRepository.delete(id);
  }
}
