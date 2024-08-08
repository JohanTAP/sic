import { Controller, Get, Param, Delete } from '@nestjs/common';
import { PorcentajeDescuentoService } from './porcentaje_descuento.service';
import { PorcentajeDescuento } from './porcentaje_descuento.entity';

@Controller('porcentaje_descuento')
export class PorcentajeDescuentoController {
  constructor(
    private readonly porcentajeDescuentoService: PorcentajeDescuentoService,
  ) {}

  @Get()
  findAll(): Promise<PorcentajeDescuento[]> {
    return this.porcentajeDescuentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PorcentajeDescuento> {
    return this.porcentajeDescuentoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.porcentajeDescuentoService.remove(id);
  }
}
