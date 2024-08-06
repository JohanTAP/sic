import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/usuario.entity';
import { Paciente } from './paciente/paciente.entity';
import { Doctor } from './doctor/doctor.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { PacienteModule } from './paciente/paciente.module';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [Usuario, Paciente, Doctor],
      synchronize: false,
    }),
    UsuarioModule,
    PacienteModule,
    DoctorModule,
  ],
})
export class AppModule {}
