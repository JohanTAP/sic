import { Controller, Get, Param, Delete } from '@nestjs/common';
import { UbicacionEmpresaService } from './ubicacion_empresa.service';
import { UbicacionEmpresa } from './ubicacion_empresa.entity';

@Controller('ubicacion_empresa')
export class UbicacionEmpresaController {
  constructor(
    private readonly ubicacionEmpresaService: UbicacionEmpresaService,
  ) {}

  @Get()
  findAll(): Promise<UbicacionEmpresa[]> {
    return this.ubicacionEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UbicacionEmpresa> {
    return this.ubicacionEmpresaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.ubicacionEmpresaService.remove(id);
  }
}
