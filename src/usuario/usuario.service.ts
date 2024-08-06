import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({
      relations: ['rol', 'estado', 'ubicacionEmpresa'],
    });
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneOrFail({
      where: { idusuario: id },
      relations: ['rol', 'estado', 'ubicacionEmpresa'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
