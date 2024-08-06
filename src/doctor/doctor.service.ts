import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find();
  }

  findOne(id: number): Promise<Doctor> {
    return this.doctorRepository.findOneBy({ iddoctor: id });
  }

  async remove(id: number): Promise<void> {
    await this.doctorRepository.delete(id);
  }
}
