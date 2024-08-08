import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormatoConebeam } from './formato_conebeam.entity';
import { FormatoConebeamService } from './formato_conebeam.service';
import { FormatoConebeamController } from './formato_conebeam.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FormatoConebeam])],
  providers: [FormatoConebeamService],
  controllers: [FormatoConebeamController],
})
export class FormatoConebeamModule {}
