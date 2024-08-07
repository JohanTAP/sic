import { Controller, Get, Param, Delete } from '@nestjs/common';
import { FormatorxService } from './formatorx.service';
import { Formatorx } from './formatorx.entity';

@Controller('formatorx')
export class FormatorxController {
  constructor(private readonly formatorxService: FormatorxService) {}

  @Get()
  findAll(): Promise<Formatorx[]> {
    return this.formatorxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Formatorx> {
    return this.formatorxService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.formatorxService.remove(id);
  }
}
