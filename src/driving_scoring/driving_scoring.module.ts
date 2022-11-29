import { Module } from '@nestjs/common';
import { driving_scoring_provider, vehicle_info_provider } from 'src/common/provider/master-provider-model';
import { DrivingScoringController } from './driving_scoring.controller';
import { DrivingScoringService } from './driving_scoring.service';

@Module({
  imports: [],
  providers: [DrivingScoringService, driving_scoring_provider],
  exports: [DrivingScoringService],
  controllers: [DrivingScoringController],
})
export class DrivingScoringModule {}
