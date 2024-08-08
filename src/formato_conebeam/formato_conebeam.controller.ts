import { Controller, Get, Param, Delete } from '@nestjs/common';
import { FormatoConebeamService } from './formato_conebeam.service';
import { FormatoConebeam } from './formato_conebeam.entity';

@Controller('formato_conebeam')
export class FormatoConebeamController {
  constructor(
    private readonly formatoConebeamService: FormatoConebeamService,
  ) {}

  @Get()
  findAll(): Promise<FormatoConebeam[]> {
    return this.formatoConebeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<FormatoConebeam> {
    return this.formatoConebeamService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.formatoConebeamService.remove(id);
  }
}
