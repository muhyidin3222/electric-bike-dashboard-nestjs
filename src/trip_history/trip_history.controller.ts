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
import { TripHistoryService } from './trip_history.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamCreate, ParamGet } from './trip_history.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { dataConstants } from 'src/auth/constants';

@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
@Controller('trip-history')
export class TripHistoryController {
  constructor(private tripHistoryService: TripHistoryService) {}

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
    const responseData = await this.tripHistoryService.getService(param);
    return responeSuccess({
      total: responseData.count,
      data: responseData.rows,
    });
  }

  @Post('/create')
  @Roles(
    dataConstants.oem_admin,
    dataConstants.master_admin,
    dataConstants.oem_master_admin,
  )
  async create(@Body() body: ParamCreate, @Req() request) {
    const { user } = request;
    let param = body;
    if (user?.type_admin !== 'master_admin') {
      param.id_oem = user?.id_oem;
    }
    const responseData = await this.tripHistoryService.createService(param);
    return responeSuccess({
      data: responseData,
    });
  }

  @Post('/update')
  @Roles(
    dataConstants.oem_admin,
    dataConstants.master_admin,
    dataConstants.oem_master_admin,
  )
  async update(@Body() body: ParamCreate) {
    const responseData = await this.tripHistoryService.updateService(body);
    return responeSuccess({
      data: responseData,
    });
  }

  @Delete('/delete/:id')
  @Roles(
    dataConstants.oem_admin,
    dataConstants.master_admin,
    dataConstants.oem_master_admin,
  )
  async delete(@Param('id', new ParseIntPipe()) id: number, @Req() request) {
    const { user } = request;
    let where: any = { id };
    if (user?.type_admin !== 'master_admin') {
      where.id_oem = user.id_oem;
    }
    const responseData = await this.tripHistoryService.deleteService({
      where,
    });
    return responeSuccess({
      data: responseData,
    });
  }
}
