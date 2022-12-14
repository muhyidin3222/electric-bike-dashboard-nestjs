import {
  Controller,
  Get,
  Query,
  Param,
  Body,
  Post,
  Delete,
  UseGuards,
  Req,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';
import { DataLogService } from './data-log.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamCreate, ParamGet, ParamUpdate } from './data-log.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { dataConstants } from 'src/auth/constants';
import { Op } from 'sequelize';
import { Roles } from 'src/auth/roles.decorator';

@Controller('data_log')
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
export class DataLogController {
  constructor(
    private dataLogService: DataLogService,
  ) {}

  @Get('/get')
  @Roles(
    dataConstants.oem_admin,
    dataConstants.master_admin,
    dataConstants.oem_master_admin,
  )
  async get(@Query() query: ParamGet, @Req() request) {
    let param = {
      ...pagination(query),
      where: {},
    };
    if (query?.name?.length) {
      param.where['name'] = {
        [Op.like]: `%${query.name}%`,
      };
    }
    const responseData = await this.dataLogService.getService(param);
    return responeSuccess({
      total: responseData.count,
      data: responseData.rows,
    });
  }

  @Post('/user/create')
  @Roles(dataConstants.user)
  async create(@Body() body: ParamCreate, @Req() request) {
    const { user } = request;
    const responseData = await this.dataLogService.createService({
      ...body,
      id_user: user.id,
    });
    return responeSuccess({
      data: responseData,
    });
  }
}
