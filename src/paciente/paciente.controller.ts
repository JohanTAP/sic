import { Controller, Get, Param, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente.entity';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Get()
  findAll(): Promise<Paciente[]> {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Paciente> {
    return this.pacienteService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pacienteService.remove(id);
  }
}
