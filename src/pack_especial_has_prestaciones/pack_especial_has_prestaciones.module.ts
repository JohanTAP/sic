import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackEspecialHasPrestaciones } from './pack_especial_has_prestaciones.entity';
import { PackEspecialHasPrestacionesService } from './pack_especial_has_prestaciones.service';
import { PackEspecialHasPrestacionesController } from './pack_especial_has_prestaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PackEspecialHasPrestaciones])],
  providers: [PackEspecialHasPrestacionesService],
  controllers: [PackEspecialHasPrestacionesController],
})
export class PackEspecialHasPrestacionesModule {}
