import { Controller, Get, Param, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Empresa> {
    return this.empresaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.empresaService.remove(id);
  }
}
