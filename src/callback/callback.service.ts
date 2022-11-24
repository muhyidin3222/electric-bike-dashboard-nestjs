import { Inject, Injectable } from '@nestjs/common';
import {
  aeris_data_provider,
  callback_provider,
} from 'src/common/provider/master-provider-model';
import { AerisDataEntity } from './aeris-data.entity';
import { CallbackEntity } from './callback.entity';

@Injectable()
export class CallbackService {
  constructor(
    @Inject(callback_provider.provide)
    private callbackRepository: typeof CallbackEntity,
    @Inject(aeris_data_provider.provide)
    private aerisDataRepository: typeof AerisDataEntity,
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
        return this.aerisDataRepository.findOrCreate({
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
            power: pow,
            service_status: ss,
            phone_number: phn,
            email: eml,
            alerts: JSON.stringify(alerts),
            asset_id: aid,
            next_service: ns,
          },
        });
      }),
    );
    return resCreated;
  }
}
