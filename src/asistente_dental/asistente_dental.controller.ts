import { Controller, Get, Param, Delete } from '@nestjs/common';
import { AsistenteDentalService } from './asistente_dental.service';
import { AsistenteDental } from './asistente_dental.entity';

@Controller('asistente_dental')
export class AsistenteDentalController {
  constructor(
    private readonly asistenteDentalService: AsistenteDentalService,
  ) {}

  @Get()
  findAll(): Promise<AsistenteDental[]> {
    return this.asistenteDentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<AsistenteDental> {
    return this.asistenteDentalService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.asistenteDentalService.remove(id);
  }
}
