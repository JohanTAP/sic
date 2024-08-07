import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NombreDescuento } from './nombre_descuento.entity';
import { NombreDescuentoService } from './nombre_descuento.service';
import { NombreDescuentoController } from './nombre_descuento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NombreDescuento])],
  providers: [NombreDescuentoService],
  controllers: [NombreDescuentoController],
})
export class NombreDescuentoModule {}
