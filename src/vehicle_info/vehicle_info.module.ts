import { Module } from '@nestjs/common';
import { vehicle_info_provider } from 'src/common/provider/master-provider-model';
import { VehicleInfoController } from './vehicle_info.controller';
import { VehicleInfoService } from './vehicle_info.service';

@Module({
  imports: [],
  providers: [VehicleInfoService, vehicle_info_provider],
  exports: [VehicleInfoService],
  controllers: [VehicleInfoController],
})
export class VehicleInfoModule {}
