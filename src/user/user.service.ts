import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import { user_provider } from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(user_provider.provide)
    private userRepository: typeof UserEntity,
  ) {}

  async detailService(param: any): Promise<UserEntity> {
    const resFindSeller = await this.userRepository.findOne({
      ...param,
      include: [
        {
          model: OemEntity,
          attributes: ['id', 'name'],
        },
      ],
    });
    return resFindSeller;
  }

  async getService(query): Promise<{ rows: UserEntity[]; count: number }> {
    const resFindSeller = await this.userRepository.findAndCountAll({
      ...query,
      attributes: [
        'id',
        'name',
        'email',
        'vin',
        'imei',
        'odometer',
        'last_login',
        'last_activities',
        'created_at',
        'phone',
        'next_service',
      ],
      order: [['created_at', 'DESC']],
    });
    return resFindSeller;
  }

  async deleteService(id: number): Promise<UserEntity | any> {
    const resFindSeller = await this.userRepository.destroy({
      where: {
        id,
      },
    });
    return resFindSeller;
  }

  async updateService(body: UserEntity | any): Promise<UserEntity> {
    await this.userRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(body: UserEntity | any): Promise<UserEntity> {
    const resFindSeller = await this.userRepository.create({
      ...body,
      last_status: 'active',
      date_last_status: moment().format('YYYY-MM-DD HH:mm:ss'),
      status_active: 1,
    });
    return resFindSeller;
  }
}
