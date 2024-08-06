import { Controller, Get, Param, Delete } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Doctor> {
    return this.doctorService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.doctorService.remove(id);
  }
}
