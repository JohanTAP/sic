import { Controller, Get, Param } from '@nestjs/common';
import { PackEspecialService } from './pack_especial.service';

@Controller('pack_especial')
export class PackEspecialController {
  constructor(private readonly packEspecialService: PackEspecialService) {}

  @Get()
  findAll() {
    return this.packEspecialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.packEspecialService.findOne(id);
  }
}
