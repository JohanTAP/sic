import { Controller, Get, Param, Delete } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { Estado } from './estado.entity';

@Controller('estado')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Get()
  findAll(): Promise<Estado[]> {
    return this.estadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Estado> {
    return this.estadoService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.estadoService.remove(id);
  }
}
