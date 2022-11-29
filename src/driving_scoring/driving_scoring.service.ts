import {
  BadGatewayException,
  BadRequestException,
  Inject,
  Injectable,
} from '@nestjs/common';
import {
  driving_scoring_provider,
  vehicle_info_provider,
} from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';
import { DrivingScoringEntity } from './driving_scoring.entity';

@Injectable()
export class DrivingScoringService {
  constructor(
    @Inject(driving_scoring_provider.provide)
    private drivingScoringRepository: typeof DrivingScoringEntity,
  ) {}

  async detailService(param: any): Promise<DrivingScoringEntity> {
    const resFindSeller = await this.drivingScoringRepository.findOne(param);
    return resFindSeller;
  }

  async getService(
    query,
  ): Promise<{ rows: DrivingScoringEntity[]; count: number }> {
    const resFindSeller = await this.drivingScoringRepository.findAndCountAll({
      ...query,
      attributes: [
        'id',
        'hard_breaking_event',
        'hard_acceleration_event',
        'hard_left_turn_event',
        'hard_right_turn_event',
        'speeding_event',
        'created_at',
      ],
      order: [['created_at', 'DESC']],
    });
    return resFindSeller;
  }

  async deleteService({ where }): Promise<DrivingScoringEntity | any> {
    const resFindSeller = await this.drivingScoringRepository.destroy({
      where: where,
    });
    return resFindSeller;
  }

  async updateService(
    body: DrivingScoringEntity | any,
  ): Promise<DrivingScoringEntity> {
    await this.drivingScoringRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(
    body: DrivingScoringEntity | any,
  ): Promise<DrivingScoringEntity> {
    const resFindSeller = await this.drivingScoringRepository.create(body);
    return resFindSeller;
  }

  async checkAccess(id: number, id_user: string): Promise<void> {
    const getDetail: DrivingScoringEntity = await this.detailService({
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
