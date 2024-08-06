import { Controller, Get, Param, Delete } from '@nestjs/common';
import { EmailService } from './email.service';
import { Email } from './email.entity';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  findAll(): Promise<Email[]> {
    return this.emailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Email> {
    return this.emailService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.emailService.remove(id);
  }
}
