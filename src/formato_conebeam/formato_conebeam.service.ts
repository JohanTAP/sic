import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormatoConebeam } from './formato_conebeam.entity';

@Injectable()
export class FormatoConebeamService {
  constructor(
    @InjectRepository(FormatoConebeam)
    private formatoConebeamRepository: Repository<FormatoConebeam>,
  ) {}

  findAll(): Promise<FormatoConebeam[]> {
    return this.formatoConebeamRepository.find();
  }

  findOne(id: number): Promise<FormatoConebeam> {
    return this.formatoConebeamRepository.findOneBy({ idformato_conebeam: id });
  }

  async remove(id: number): Promise<void> {
    await this.formatoConebeamRepository.delete(id);
  }
}
