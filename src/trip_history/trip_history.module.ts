import { Module } from '@nestjs/common';
import {
  log_api_call_provider,
  trip_history_provider,
} from 'src/common/provider/master-provider-model';
import { TripHistoryController } from './trip_history.controller';
import { TripHistoryService } from './trip_history.service';

@Module({
  imports: [],
  providers: [TripHistoryService, trip_history_provider, log_api_call_provider],
  exports: [TripHistoryService],
  controllers: [TripHistoryController],
})
export class TripHistoryModule {}
