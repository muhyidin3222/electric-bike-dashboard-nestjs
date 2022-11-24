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
  BadRequestException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamCreate, ParamGet } from './admin.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { dataConstants, roleConstants } from 'src/auth/constants';
import { Roles } from 'src/auth/roles.decorator';

@Controller('admin')
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('/get')
  @Roles(roleConstants.master_admin, roleConstants.oem_master_admin)
  async get(@Query() query: ParamGet, @Req() request) {
    const { user } = request;
    let param = {
      where: {},
      ...pagination(query),
    };
    console.log(user, 'user');
    if (user?.id_oem && user.type_admin === 'oem_master_admin') {
      param.where = {
        id_oem: user?.id_oem,
      };
    }
    const responseData = await this.adminService.getService(param);
    return responeSuccess({
      total: responseData.count,
      data: responseData.rows,
    });
  }

  @Post('/create')
  @Roles(roleConstants.master_admin, roleConstants.oem_master_admin)
  async create(@Body() body: ParamCreate, @Req() request) {
    const { user } = request;
    let param = body;
    if (user?.type_admin === dataConstants.oem_admin) {
      param.id_oem = user?.id;
    }
    if (
      user?.type_admin === dataConstants.master_admin &&
      body.type_admin === 'admin_oem' &&
      !body.id_oem
    ) {
      throw new BadRequestException('OEM is required');
    }
    const responseData = await this.adminService.createService({
      ...body,
    });
    return responeSuccess({
      data: responseData,
    });
  }

  @Post('/update')
  @Roles(roleConstants.master_admin, roleConstants.oem_master_admin)
  async update(@Body() body: ParamCreate) {
    const responseData = await this.adminService.updateService(body);
    return responeSuccess({
      data: responseData,
    });
  }

  @Get('/detail/:id')
  @Roles(roleConstants.master_admin, roleConstants.oem_master_admin)
  async detail(@Param('id', new ParseIntPipe()) id: number) {
    const responseData = await this.adminService.detailService({
      where: {
        id,
      },
    });
    return responeSuccess({
      data: responseData,
    });
  }

  @Delete('/delete/:id')
  @Roles(roleConstants.master_admin, roleConstants.oem_master_admin)
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    const responseData = await this.adminService.deleteService(id);
    return responeSuccess({
      data: responseData,
    });
  }
}
