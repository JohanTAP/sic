import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formatorx } from './formatorx.entity';
import { FormatorxService } from './formatorx.service';
import { FormatorxController } from './formatorx.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Formatorx])],
  providers: [FormatorxService],
  controllers: [FormatorxController],
})
export class FormatorxModule {}
