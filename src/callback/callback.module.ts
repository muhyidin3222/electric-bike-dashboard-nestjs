import { Module } from '@nestjs/common';
import {
  aeris_data_provider,
  callback_provider,
} from 'src/common/provider/master-provider-model';
import { CallbackController } from './callback.controller';
import { CallbackService } from './callback.service';

@Module({
  imports: [],
  providers: [CallbackService, callback_provider, aeris_data_provider],
  exports: [CallbackService],
  controllers: [CallbackController],
})
export class CallbackModule {}
