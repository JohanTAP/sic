import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackEspecial } from './pack_especial.entity';
import { PackEspecialService } from './pack_especial.service';
import { PackEspecialController } from './pack_especial.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PackEspecial])],
  providers: [PackEspecialService],
  controllers: [PackEspecialController],
})
export class PackEspecialModule {}
