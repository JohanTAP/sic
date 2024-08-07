import { Controller, Get, Param, Delete } from '@nestjs/common';
import { PrestacionesService } from './prestaciones.service';
import { Prestaciones } from './prestaciones.entity';

@Controller('prestaciones')
export class PrestacionesController {
  constructor(private readonly prestacionesService: PrestacionesService) {}

  @Get()
  findAll(): Promise<Prestaciones[]> {
    return this.prestacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Prestaciones> {
    return this.prestacionesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.prestacionesService.remove(id);
  }
}
