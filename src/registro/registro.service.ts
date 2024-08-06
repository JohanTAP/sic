import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from './registro.entity';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private registroRepository: Repository<Registro>,
  ) {}

  findAll(): Promise<Registro[]> {
    return this.registroRepository.find();
  }

  findOne(id_usuario: number, fecha: Date, hora: string): Promise<Registro> {
    return this.registroRepository.findOne({
      where: { id_usuario, fecha, hora },
    });
  }

  async remove(id_usuario: number, fecha: Date, hora: string): Promise<void> {
    await this.registroRepository.delete({ id_usuario, fecha, hora });
  }
}
