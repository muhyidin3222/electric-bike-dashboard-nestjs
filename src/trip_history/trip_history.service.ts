import {
  BadGatewayException,
  BadRequestException,
  Inject,
  Injectable,
} from '@nestjs/common';
import {
  trip_history_provider,
  vehicle_info_provider,
} from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';
import { TripHistoryEntity } from './trip_history.entity';

@Injectable()
export class TripHistoryService {
  constructor(
    @Inject(trip_history_provider.provide)
    private tripHistoryRepository: typeof TripHistoryEntity,
  ) {}

  async detailService(param: any): Promise<TripHistoryEntity> {
    const resFindSeller = await this.tripHistoryRepository.findOne(param);
    return resFindSeller;
  }

  async getService(
    query,
  ): Promise<{ rows: TripHistoryEntity[]; count: number }> {
    const resFindSeller = await this.tripHistoryRepository.findAndCountAll({
      ...query,
      attributes: [
        'id',
        'cost',
        'distance',
        'duration',
        'start_time',
        'end_time',
        'start_location',
        'end_location',
        'start_lat',
        'end_lat',
        'start_lng',
        'end_lng',
        'created_at',
      ],
      order: [['created_at', 'DESC']],
    });
    return resFindSeller;
  }

  async deleteService({ where }): Promise<TripHistoryEntity | any> {
    const resFindSeller = await this.tripHistoryRepository.destroy({
      where: where,
    });
    return resFindSeller;
  }

  async updateService(
    body: TripHistoryEntity | any,
  ): Promise<TripHistoryEntity> {
    await this.tripHistoryRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(
    body: TripHistoryEntity | any,
  ): Promise<TripHistoryEntity> {
    const resFindSeller = await this.tripHistoryRepository.create(body);
    return resFindSeller;
  }

  async checkAccess(id: number, id_user: string): Promise<void> {
    const getDetail: TripHistoryEntity = await this.detailService({
      where: {
        id,
      },
      attributes: ['id_seller'],
    });
    // if (getDetail && getDetail?.id_seller !== id_user) {
    //   throw new BadRequestException('not have access');
    // }
  }
}
