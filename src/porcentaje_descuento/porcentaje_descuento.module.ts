import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PorcentajeDescuento } from './porcentaje_descuento.entity';
import { PorcentajeDescuentoService } from './porcentaje_descuento.service';
import { PorcentajeDescuentoController } from './porcentaje_descuento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PorcentajeDescuento])],
  providers: [PorcentajeDescuentoService],
  controllers: [PorcentajeDescuentoController],
})
export class PorcentajeDescuentoModule {}
