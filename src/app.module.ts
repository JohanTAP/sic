import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/usuario.entity';
import { Paciente } from './paciente/paciente.entity';
import { Doctor } from './doctor/doctor.entity';
import { Rol } from './rol/rol.entity';
import { Registro } from './registro/registro.entity';
import { CajaInicial } from './caja_inicial/caja_inicial.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { PacienteModule } from './paciente/paciente.module';
import { DoctorModule } from './doctor/doctor.module';
import { RolModule } from './rol/rol.module';
import { RegistroModule } from './registro/registro.module';
import { CajaInicialModule } from './caja_inicial/caja_inicial.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [Usuario, Paciente, Doctor, Rol, Registro, CajaInicial],
      synchronize: false,
    }),
    UsuarioModule,
    PacienteModule,
    DoctorModule,
    RolModule,
    RegistroModule,
    CajaInicialModule,
  ],
})
export class AppModule {}
