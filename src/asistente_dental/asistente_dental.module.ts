import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenteDental } from './asistente_dental.entity';
import { AsistenteDentalService } from './asistente_dental.service';
import { AsistenteDentalController } from './asistente_dental.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AsistenteDental])],
  providers: [AsistenteDentalService],
  controllers: [AsistenteDentalController],
})
export class AsistenteDentalModule {}
