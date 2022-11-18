import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import { oem_provider } from 'src/common/provider/master-provider-model';
import { OemEntity } from './oem.entity';

@Injectable()
export class OemService {
  constructor(
    @Inject(oem_provider.provide)
    private oemRepository: typeof OemEntity,
  ) {}

  async detailService(param: any): Promise<OemEntity> {
    const resFindSeller = await this.oemRepository.findOne(param);
    return resFindSeller;
  }

  async getService(query): Promise<{ rows: OemEntity[]; count: number }> {
    const resFindSeller = await this.oemRepository.findAndCountAll({
      ...query,
      attributes: [
        'id',
        'name',
        'pic_name',
        'pic_email',
        'pic_phone_number',
        'status_active',
        'date_last_status',
        'created_at',
      ],
      order: [['created_at', 'DESC']],
    });
    return resFindSeller;
  }

  async deleteService(id: number): Promise<OemEntity | any> {
    const resFindSeller = await this.oemRepository.destroy({
      where: {
        id,
      },
    });
    return resFindSeller;
  }

  async updateService(body: OemEntity | any): Promise<OemEntity> {
    if ((body.status_active === 1 || body.status_active === 0) && !body.name) {
      body.date_last_status = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    await this.oemRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(body: OemEntity | any): Promise<OemEntity> {
    const resFindSeller = await this.oemRepository.create({
      ...body,
      last_status: 'active',
      date_last_status: moment().format('YYYY-MM-DD HH:mm:ss'),
      status_active: 1,
    });
    return resFindSeller;
  }
}
