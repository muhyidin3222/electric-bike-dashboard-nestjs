import { Module } from '@nestjs/common';
import {
  log_api_call_provider,
  notification_provider,
} from 'src/common/provider/master-provider-model';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [],
  providers: [
    NotificationService,
    notification_provider,
    log_api_call_provider,
  ],
  exports: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
