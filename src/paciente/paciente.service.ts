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
    return this.pacienteRepository.find({ relations: ['email'] });
  }

  findOne(id: number): Promise<Paciente> {
    return this.pacienteRepository.findOne({
      where: { idpaciente: id },
      relations: ['email'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.pacienteRepository.delete(id);
  }
}
