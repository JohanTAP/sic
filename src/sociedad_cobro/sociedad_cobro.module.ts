import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SociedadCobro } from './sociedad_cobro.entity';
import { SociedadCobroService } from './sociedad_cobro.service';
import { SociedadCobroController } from './sociedad_cobro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SociedadCobro])],
  providers: [SociedadCobroService],
  controllers: [SociedadCobroController],
})
export class SociedadCobroModule {}
