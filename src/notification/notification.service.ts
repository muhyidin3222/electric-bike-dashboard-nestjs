import {
  BadGatewayException,
  BadRequestException,
  Inject,
  Injectable,
} from '@nestjs/common';
import {
  notification_provider,
  vehicle_info_provider,
} from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';
import { NotificationEntity } from './notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(notification_provider.provide)
    private notificationRepository: typeof NotificationEntity,
  ) {}

  async detailService(param: any): Promise<NotificationEntity> {
    const resFindSeller = await this.notificationRepository.findOne(param);
    return resFindSeller;
  }

  async getService(
    query,
  ): Promise<{ rows: NotificationEntity[]; count: number }> {
    const resFindSeller = await this.notificationRepository.findAndCountAll({
      ...query,
      attributes: ['id', 'name', 'code', 'date', 'created_at'],
      order: [['created_at', 'DESC']],
    });
    return resFindSeller;
  }

  async deleteService({ where }): Promise<NotificationEntity | any> {
    const resFindSeller = await this.notificationRepository.destroy({
      where: where,
    });
    return resFindSeller;
  }

  async updateService(
    body: NotificationEntity | any,
  ): Promise<NotificationEntity> {
    await this.notificationRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(
    body: NotificationEntity | any,
  ): Promise<NotificationEntity> {
    const resFindSeller = await this.notificationRepository.create(body);
    return resFindSeller;
  }

  async checkAccess(id: number, id_user: string): Promise<void> {
    const getDetail: NotificationEntity = await this.detailService({
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
