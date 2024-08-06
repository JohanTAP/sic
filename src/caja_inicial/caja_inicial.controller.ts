import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CajaInicialService } from './caja_inicial.service';
import { CajaInicial } from './caja_inicial.entity';

@Controller('caja_inicial')
export class CajaInicialController {
  constructor(private readonly cajaInicialService: CajaInicialService) {}

  @Get()
  findAll(): Promise<CajaInicial[]> {
    return this.cajaInicialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CajaInicial> {
    return this.cajaInicialService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cajaInicialService.remove(id);
  }
}
