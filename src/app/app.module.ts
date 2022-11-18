import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '../common/library/config.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { LibraryModule } from '../common/library/library.module';
import { HttpExceptionFilter } from 'src/common/library/http-exception.filter';
import { DatabaseModule } from 'src/database/database.module';
import { VehicleInfoModule } from 'src/vehicle_info/vehicle_info.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigService } from 'src/common/library/config.service';
import { OemModule } from 'src/oem/oem.module';
import { AdminModule } from 'src/admin/admin.module';
import { UserModule } from 'src/user/user.module';
import { auths_provider } from 'src/common/provider/master-provider-model';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    LibraryModule,
    ScheduleModule.forRoot(),
    DatabaseModule,
    VehicleInfoModule,
    OemModule,
    AdminModule,
    UserModule,
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [],
})
export class AppModule {}
