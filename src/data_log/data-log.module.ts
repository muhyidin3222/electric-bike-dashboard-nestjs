import { Module } from '@nestjs/common';
import {
  log_api_call_provider,
  log_page_visited_data_provider,
} from 'src/common/provider/master-provider-model';
import { DataLogController } from './data_log.controller';
import { DataLogService } from './data-log.service';

@Module({
  imports: [],
  providers: [
    DataLogService,
    log_api_call_provider,
    log_page_visited_data_provider,
  ],
  exports: [DataLogService],
  controllers: [DataLogController],
})
export class DataLogModule {}
