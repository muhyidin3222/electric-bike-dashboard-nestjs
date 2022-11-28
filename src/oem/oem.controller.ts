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
import { OemService } from './oem.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamCreate, ParamGet, ParamUpdate } from './oem.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { dataConstants } from 'src/auth/constants';
import { Op } from 'sequelize';

@Controller('oem')
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
export class OemController {
  constructor(private oemService: OemService) {}

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
    const responseData = await this.oemService.getService(param);
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
    const responseData = await this.oemService.createService({
      ...body,
    });
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
  async update(@Body() body: ParamUpdate) {
    const responseData = await this.oemService.updateService(body);
    return responeSuccess({
      data: responseData,
    });
  }

  @Get('/detail/:id')
  @Roles(
    dataConstants.oem_admin,
    dataConstants.master_admin,
    dataConstants.oem_master_admin,
  )
  async detail(@Param('id', new ParseIntPipe()) id: number) {
    const responseData = await this.oemService.detailService({
      where: {
        id,
      },
    });
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
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    const responseData = await this.oemService.deleteService(id);
    return responeSuccess({
      data: responseData,
    });
  }
}
