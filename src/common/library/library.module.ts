import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { UploadService } from './upload';

@Module({
  imports: [
    ConfigModule,
  ],
  providers: [
    UploadService,
  ],
  exports: [
    UploadService,
  ],
  controllers: [],
})
export class LibraryModule {}
