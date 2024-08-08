import { Controller, Get, Param, Delete } from '@nestjs/common';
import { SociedadCobroService } from './sociedad_cobro.service';
import { SociedadCobro } from './sociedad_cobro.entity';

@Controller('sociedad_cobro')
export class SociedadCobroController {
  constructor(private readonly sociedadCobroService: SociedadCobroService) {}

  @Get()
  findAll(): Promise<SociedadCobro[]> {
    return this.sociedadCobroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<SociedadCobro> {
    return this.sociedadCobroService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.sociedadCobroService.remove(id);
  }
}
