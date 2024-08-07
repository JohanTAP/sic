import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaPrestaciones } from './categoria_prestaciones.entity';
import { CategoriaPrestacionesService } from './categoria_prestaciones.service';
import { CategoriaPrestacionesController } from './categoria_prestaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaPrestaciones])],
  providers: [CategoriaPrestacionesService],
  controllers: [CategoriaPrestacionesController],
})
export class CategoriaPrestacionesModule {}
