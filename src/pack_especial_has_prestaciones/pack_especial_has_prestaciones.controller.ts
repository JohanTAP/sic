import { Controller, Get, Param } from '@nestjs/common';
import { PackEspecialHasPrestacionesService } from './pack_especial_has_prestaciones.service';

@Controller('pack_especial_has_prestaciones')
export class PackEspecialHasPrestacionesController {
  constructor(
    private readonly packEspecialHasPrestacionesService: PackEspecialHasPrestacionesService,
  ) {}

  @Get()
  findAll() {
    return this.packEspecialHasPrestacionesService.findAll();
  }

  @Get(':packEspecialId/:prestacionesId')
  findOne(
    @Param('packEspecialId') packEspecialId: number,
    @Param('prestacionesId') prestacionesId: number,
  ) {
    return this.packEspecialHasPrestacionesService.findOne(
      packEspecialId,
      prestacionesId,
    );
  }
}
