import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { PacienteModule } from './paciente/paciente.module';
import { DoctorModule } from './doctor/doctor.module';
import { RolModule } from './rol/rol.module';
import { RegistroModule } from './registro/registro.module';
import { CajaInicialModule } from './caja_inicial/caja_inicial.module';
import { UbicacionEmpresaModule } from './ubicacion_empresa/ubicacion_empresa.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EmailModule } from './email/email.module';
import { EstadoModule } from './estado/estado.module';
import { FormatorxModule } from './formatorx/formatorx.module';
import { EstadoFormatorxModule } from './estado_formatorx/estado_formatorx.module';
import { AsistenteDentalModule } from './asistente_dental/asistente_dental.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsuarioModule,
    PacienteModule,
    DoctorModule,
    RolModule,
    RegistroModule,
    CajaInicialModule,
    UbicacionEmpresaModule,
    EmpresaModule,
    EmailModule,
    EstadoModule,
    FormatorxModule,
    EstadoFormatorxModule,
    AsistenteDentalModule,
  ],
})
export class AppModule {}
