import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import { col, fn, Op } from 'sequelize';
import {
  log_api_call_provider,
  log_page_visited_data_provider,
  oem_provider,
  user_provider,
} from 'src/common/provider/master-provider-model';
import { LogApiCallEntity } from 'src/data_log/log-api-call.entity';
import { LogPageVisitedEntity } from 'src/data_log/log-page-visited.entity';
import { OemEntity } from 'src/oem/oem.entity';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject(oem_provider.provide)
    private oemRepository: typeof OemEntity,
    @Inject(user_provider.provide)
    private userRepository: typeof UserEntity,
    @Inject(log_api_call_provider.provide)
    private logApiRepository: typeof LogApiCallEntity,
    @Inject(log_page_visited_data_provider.provide)
    private logPageVisitedRepository: typeof LogPageVisitedEntity,
  ) {}

  main(): string {
    return 'success main api';
  }

  async homeDashboardChart(id_oem?: number): Promise<any> {
    let where = {};
    if (id_oem) {
      where = { id_oem: id_oem };
    }
    const totalOem = await this.oemRepository.count({ where });
    const totalUser = await this.userRepository.count({ where });
    const logApi = await this.logApiRepository.findAll({
      where: {
        ...where,
        created_at: {
          [Op.between]: [moment().subtract(1, 'months'), moment()],
        },
      },
      attributes: [
        'created_at',
        'id_oem',
        [fn('sum', col('created_at')), 'total_created_at'],
      ],
      group: ['created_at'],
    });

    return {
      totalOem,
      totalUser,
      logApi,
    };
  }
}
