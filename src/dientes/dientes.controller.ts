import { Controller, Get, Param, Delete } from '@nestjs/common';
import { DientesService } from './dientes.service';
import { Dientes } from './dientes.entity';

@Controller('dientes')
export class DientesController {
  constructor(private readonly dientesService: DientesService) {}

  @Get()
  findAll(): Promise<Dientes[]> {
    return this.dientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Dientes> {
    return this.dientesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.dientesService.remove(id);
  }
}
