import { Controller, Get, Param, Delete } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { Registro } from './registro.entity';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Get()
  findAll(): Promise<Registro[]> {
    return this.registroService.findAll();
  }

  @Get(':id_usuario/:fecha/:hora')
  findOne(
    @Param('id_usuario') id_usuario: number,
    @Param('fecha') fecha: string,
    @Param('hora') hora: string,
  ): Promise<Registro> {
    return this.registroService.findOne(id_usuario, new Date(fecha), hora);
  }

  @Delete(':id_usuario/:fecha/:hora')
  remove(
    @Param('id_usuario') id_usuario: number,
    @Param('fecha') fecha: string,
    @Param('hora') hora: string,
  ): Promise<void> {
    return this.registroService.remove(id_usuario, new Date(fecha), hora);
  }
}
