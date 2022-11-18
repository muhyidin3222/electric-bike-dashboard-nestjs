import { Module } from '@nestjs/common';
import { admin_provider } from 'src/common/provider/master-provider-model';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [],
  providers: [AdminService, admin_provider],
  exports: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
