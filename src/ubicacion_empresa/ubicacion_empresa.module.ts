import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionEmpresa } from './ubicacion_empresa.entity';
import { UbicacionEmpresaService } from './ubicacion_empresa.service';
import { UbicacionEmpresaController } from './ubicacion_empresa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UbicacionEmpresa])],
  providers: [UbicacionEmpresaService],
  controllers: [UbicacionEmpresaController],
})
export class UbicacionEmpresaModule {}
