import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Email } from './email.entity';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private emailRepository: Repository<Email>,
  ) {}

  findAll(): Promise<Email[]> {
    return this.emailRepository.find();
  }

  findOne(id: number): Promise<Email> {
    return this.emailRepository.findOneBy({ idemail: id });
  }

  async remove(id: number): Promise<void> {
    await this.emailRepository.delete(id);
  }
}
