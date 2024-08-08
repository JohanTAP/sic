import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dientes } from './dientes.entity';
import { DientesService } from './dientes.service';
import { DientesController } from './dientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dientes])],
  providers: [DientesService],
  controllers: [DientesController],
})
export class DientesModule {}
