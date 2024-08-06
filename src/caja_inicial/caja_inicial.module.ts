import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CajaInicial } from './caja_inicial.entity';
import { CajaInicialService } from './caja_inicial.service';
import { CajaInicialController } from './caja_inicial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CajaInicial])],
  providers: [CajaInicialService],
  controllers: [CajaInicialController],
})
export class CajaInicialModule {}
