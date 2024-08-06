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
    return this.ubicacionEmpresaRepository.find();
  }

  findOne(id: number): Promise<UbicacionEmpresa> {
    return this.ubicacionEmpresaRepository.findOneBy({
      idubicacion_empresa: id,
    });
  }

  async remove(id: number): Promise<void> {
    await this.ubicacionEmpresaRepository.delete(id);
  }
}
