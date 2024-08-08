import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SociedadCobro } from './sociedad_cobro.entity';

@Injectable()
export class SociedadCobroService {
  constructor(
    @InjectRepository(SociedadCobro)
    private sociedadCobroRepository: Repository<SociedadCobro>,
  ) {}

  findAll(): Promise<SociedadCobro[]> {
    return this.sociedadCobroRepository.find({
      relations: ['ubicacionEmpresa'],
    });
  }

  findOne(id: number): Promise<SociedadCobro> {
    return this.sociedadCobroRepository.findOne({
      where: { idsociedad_cobro: id },
      relations: ['ubicacionEmpresa'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.sociedadCobroRepository.delete(id);
  }
}
