import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CategoriaPrestacionesService } from './categoria_prestaciones.service';
import { CategoriaPrestaciones } from './categoria_prestaciones.entity';

@Controller('categoria_prestaciones')
export class CategoriaPrestacionesController {
  constructor(
    private readonly categoriaPrestacionesService: CategoriaPrestacionesService,
  ) {}

  @Get()
  findAll(): Promise<CategoriaPrestaciones[]> {
    return this.categoriaPrestacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CategoriaPrestaciones> {
    return this.categoriaPrestacionesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.categoriaPrestacionesService.remove(id);
  }
}
