import { Controller, Get, Param, Delete } from '@nestjs/common';
import { NombreDescuentoService } from './nombre_descuento.service';
import { NombreDescuento } from './nombre_descuento.entity';

@Controller('nombre_descuento')
export class NombreDescuentoController {
  constructor(
    private readonly nombreDescuentoService: NombreDescuentoService,
  ) {}

  @Get()
  findAll(): Promise<NombreDescuento[]> {
    return this.nombreDescuentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<NombreDescuento> {
    return this.nombreDescuentoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.nombreDescuentoService.remove(id);
  }
}
