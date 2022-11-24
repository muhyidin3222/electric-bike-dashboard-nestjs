import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import {
  log_page_visited_data_provider,
  oem_provider,
} from 'src/common/provider/master-provider-model';
import { LogPageVisitedEntity } from './log-page-visited.entity';

@Injectable()
export class DataLogService {
  constructor(
    @Inject(log_page_visited_data_provider.provide)
    private logPageVisitedRepository: typeof LogPageVisitedEntity,
  ) {}

  async detailService(param: any): Promise<LogPageVisitedEntity> {
    const resFindSeller = await this.logPageVisitedRepository.findOne(param);
    return resFindSeller;
  }

  async getService(
    query,
  ): Promise<{ rows: LogPageVisitedEntity[]; count: number }> {
    const resFindSeller = await this.logPageVisitedRepository.findAndCountAll({
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

  async deleteService(id: number): Promise<LogPageVisitedEntity | any> {
    const resFindSeller = await this.logPageVisitedRepository.destroy({
      where: {
        id,
      },
    });
    return resFindSeller;
  }

  async updateService(
    body: LogPageVisitedEntity | any,
  ): Promise<LogPageVisitedEntity> {
    if ((body.status_active === 1 || body.status_active === 0) && !body.name) {
      body.date_last_status = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    await this.logPageVisitedRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(
    body: LogPageVisitedEntity | any,
  ): Promise<LogPageVisitedEntity> {
    const resFindSeller = await this.logPageVisitedRepository.create({
      ...body,
      last_status: 'active',
      date_last_status: moment().format('YYYY-MM-DD HH:mm:ss'),
      status_active: 1,
    });
    return resFindSeller;
  }
}
