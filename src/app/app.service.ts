import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import sequelize from 'sequelize';
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
import _ from 'lodash';

console.log(
  moment().subtract(1, 'day').format('DD HH'),
  moment().subtract(moment().format('HH'), 'hours').format('HH'),
);

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
    const totalOnBoarded = await this.userRepository.count({
      where: {
        ...where,
        last_activities: null,
      },
    });

    const logApi = await this.logApiRepository.findAll({
      where: {
        ...where,
        created_at: {
          [Op.between]: [moment().subtract(1, 'day'), moment()],
        },
      },
      attributes: ['created_at'],
    });
    const logVisitedPage = await this.logPageVisitedRepository.findAll({
      where: {
        ...where,
        created_at: {
          [Op.between]: [moment().subtract(1, 'day'), moment()],
        },
      },
      attributes: ['page'],
    });

    const totalUserActiveLast = await this.userRepository.findAll({
      where: {
        ...where,
        created_at: {
          [Op.between]: [moment().subtract(30, 'day'), moment()],
        },
      },
      attributes: ['created_at'],
    });

    const userMostActiveLast = await this.userRepository.findAll({
      where: where,
      attributes: ['id', 'image', 'name', 'count_active'],
      limit: 5,
      order: [['count_active', 'DESC']],
    });

    const totalNewUserToday = await this.userRepository.findAll({
      where: {
        ...where,
        created_at: {
          [Op.between]: [
            moment().subtract(moment().format('HH'), 'hours'),
            moment(),
          ],
        },
      },
      limit: 5,
      attributes: ['id', 'image', 'name', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    const hours0 = moment().format('HH');
    const totalNewUserYesterday = await this.userRepository.findAll({
      where: {
        ...where,
        created_at: {
          [Op.between]: [
            moment().subtract(Number(hours0) + 24, 'hours'),
            moment().subtract(hours0, 'hours'),
          ],
        },
      },
      limit: 5,
      attributes: ['id', 'image', 'name', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    const logGroup = _.chain(logApi)
      .groupBy((value: any) => {
        return moment(value?.dataValues?.created_at).format('HH');
      })
      .map((value: any, key) => {
        return {
          label: Number(key),
          count: value?.length,
        };
      })
      .value();

    const logVisitedGroup = _.chain(logVisitedPage)
      .groupBy((value: any) => {
        return value.page;
      })
      .map((value: any, key) => {
        return {
          label: key,
          count: value?.length,
        };
      })
      .value();

    const totalUserActiveLastGroup = _.chain(totalUserActiveLast)
      .groupBy((value: any) => {
        return moment(value?.dataValues?.created_at).format('DD');
      })
      .map((value: any, key) => {
        return {
          label: Number(key),
          count: value?.length,
        };
      })
      .value();

    return {
      totalOem,
      totalUser,
      totalOnBoarded,
      logApi: logGroup,
      logVisitedPage: logVisitedGroup,
      totalUserActiveLast: totalUserActiveLastGroup,
      userMostActiveLast,
      totalNewUserToday,
      totalNewUserYesterday,
    };
  }
}
