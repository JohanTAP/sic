import { Controller, Get, Param, Delete } from '@nestjs/common';
import { EstadoFormatorxService } from './estado_formatorx.service';
import { EstadoFormatorx } from './estado_formatorx.entity';

@Controller('estado_formatorx')
export class EstadoFormatorxController {
  constructor(
    private readonly estadoFormatorxService: EstadoFormatorxService,
  ) {}

  @Get()
  findAll(): Promise<EstadoFormatorx[]> {
    return this.estadoFormatorxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<EstadoFormatorx> {
    return this.estadoFormatorxService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.estadoFormatorxService.remove(id);
  }
}
