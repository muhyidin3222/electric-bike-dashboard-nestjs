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
} from '@nestjs/common';
import { DataLogService } from './data-log.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamCreate, ParamGet, ParamUpdate } from './oem.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { roleConstants } from 'src/auth/constants';
import { Op } from 'sequelize';

@Controller('data_log')
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
// @Roles(roleConstants.seller)
export class DataLogController {
  constructor(private dataLogService: DataLogService) {}

  @Get('/get')
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

  @Post('/create')
  async create(@Body() body: ParamCreate, @Req() request) {
    const responseData = await this.dataLogService.createService({
      ...body,
    });
    return responeSuccess({
      data: responseData,
    });
  }

}
