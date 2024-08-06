import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UbicacionEmpresa } from './ubicacion_empresa.entity';

@Injectable()
export class UbicacionEmpresaService {
  constructor(
    @InjectRepository(UbicacionEmpresa)
    private ubicacionEmpresaRepository: Repository<UbicacionEmpresa>,
  ) {}

  findAll(): Promise<UbicacionEmpresa[]> {
    return this.ubicacionEmpresaRepository.find({ relations: ['empresas'] });
  }

  findOne(id: number): Promise<UbicacionEmpresa> {
    return this.ubicacionEmpresaRepository.findOne({
      where: { idubicacion_empresa: id },
      relations: ['empresas'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.ubicacionEmpresaRepository.delete(id);
  }
}
