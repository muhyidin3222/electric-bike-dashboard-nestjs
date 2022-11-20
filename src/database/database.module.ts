import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/common/library/config.module';
import { ConfigService } from 'src/common/library/config.service';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders, ConfigService],
  imports: [ConfigModule],
  exports: [...databaseProviders, ConfigService],
})
export class DatabaseModule {}
