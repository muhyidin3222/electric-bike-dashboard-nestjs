import { Inject, Injectable } from '@nestjs/common';
import {
  aeris_data_provider,
  callback_provider,
  user_provider,
  vehicle_info_provider,
} from 'src/common/provider/master-provider-model';
import { UserEntity } from 'src/user/user.entity';
import { VehicleInfoEntity } from 'src/vehicle_info/vehicle_info.entity';
import { AerisDataEntity } from './aeris-data.entity';
import { CallbackEntity } from './callback.entity';

@Injectable()
export class CallbackService {
  constructor(
    @Inject(callback_provider.provide)
    private callbackRepository: typeof CallbackEntity,
    @Inject(aeris_data_provider.provide)
    private aerisDataRepository: typeof AerisDataEntity,
    @Inject(user_provider.provide)
    private userRepository: typeof UserEntity,
    @Inject(vehicle_info_provider.provide)
    private vehicleInfoRepository: typeof VehicleInfoEntity,
  ) {}

  async createService(headers: any, body: any): Promise<any> {
    await this.callbackRepository.create({
      headers: JSON.stringify(headers),
      body: JSON.stringify(body),
    });
    const resCreated = await Promise.all(
      body.map(async (value) => {
        const {
          imei,
          vno,
          vin,
          lat,
          lng,
          lad,
          led,
          bp,
          sts,
          spd,
          odo,
          pow,
          ss,
          ns,
          phn,
          eml,
          alerts,
          aid,
          id,
        }: any = value;
        const resAerisData = await this.aerisDataRepository.findOrCreate({
          where: { id },
          defaults: {
            vehicle_number: vno,
            imei: imei,
            vin: vin,
            lat: lat,
            lng: lng,
            last_activation_date: lad,
            license_expire_date: led,
            battery_level_percentage: bp,
            status: sts,
            speed: spd,
            odometer: odo,
            power: pow === 'False' ? 'false' : 'true',
            service_status: ss,
            phone_number: phn,
            email: eml,
            alerts: JSON.stringify(alerts),
            asset_id: aid,
            next_service: ns,
          },
        });
        const resVechileInfo: any =
          await this.vehicleInfoRepository.findOrCreate({
            where: {
              type: vno,
            },
            defaults: {
              type: vno,
              name: vno,
            },
          });
        await this.userRepository.findOrCreate({
          where: {
            aeris_data_id: id,
          },
          defaults: {
            aeris_data_id: id,
            email: eml,
            phone: phn,
            vin: vin,
            imei: imei,
            odometer: odo,
            next_service: ns,
            last_activities: lad,
            vehicle_info_id: resVechileInfo[0]?.dataValues?.id,
          },
        });
        return resAerisData;
      }),
    );
    return resCreated;
  }
}
