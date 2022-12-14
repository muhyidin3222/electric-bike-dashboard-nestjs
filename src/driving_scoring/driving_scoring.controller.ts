import { Controller, Get, Query, UseGuards, Req, Inject } from '@nestjs/common';
import { DrivingScoringService } from './driving_scoring.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamGet } from './driving_scoring.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { dataConstants } from 'src/auth/constants';
import { log_api_call_provider } from 'src/common/provider/master-provider-model';
import { LogApiCallEntity } from 'src/data_log/log-api-call.entity';

@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
@Controller('driving-scoring')
export class DrivingScoringController {
  constructor(
    private drivingScoringService: DrivingScoringService,
    @Inject(log_api_call_provider.provide)
    private logApiRepository: typeof LogApiCallEntity,
  ) {}

  @Get('/customer/get')
  @Roles(dataConstants.user)
  async get(@Query() query: ParamGet, @Req() request) {
    const { user } = request;
    let param = {
      ...pagination(query),
      where: {
        id_user: user?.id,
      },
    };
    const responseData = await this.drivingScoringService.getService(param);
    this.logApiRepository.create({
      method: 'GET',
      url: '/driving-scoring/customer/get',
      id_user: user?.id,
    });
    return responeSuccess({
      total: responseData.count,
      data: responseData.rows,
    });
  }
}
