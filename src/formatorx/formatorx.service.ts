import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formatorx } from './formatorx.entity';

@Injectable()
export class FormatorxService {
  constructor(
    @InjectRepository(Formatorx)
    private formatorxRepository: Repository<Formatorx>,
  ) {}

  findAll(): Promise<Formatorx[]> {
    return this.formatorxRepository.find();
  }

  findOne(id: number): Promise<Formatorx> {
    return this.formatorxRepository.findOneBy({ idformatorx: id });
  }

  async remove(id: number): Promise<void> {
    await this.formatorxRepository.delete(id);
  }
}
