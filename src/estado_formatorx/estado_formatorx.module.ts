import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoFormatorx } from './estado_formatorx.entity';
import { EstadoFormatorxService } from './estado_formatorx.service';
import { EstadoFormatorxController } from './estado_formatorx.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoFormatorx])],
  providers: [EstadoFormatorxService],
  controllers: [EstadoFormatorxController],
})
export class EstadoFormatorxModule {}
