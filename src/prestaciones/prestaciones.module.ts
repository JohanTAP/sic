import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestaciones } from './prestaciones.entity';
import { PrestacionesService } from './prestaciones.service';
import { PrestacionesController } from './prestaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Prestaciones])],
  providers: [PrestacionesService],
  controllers: [PrestacionesController],
})
export class PrestacionesModule {}
