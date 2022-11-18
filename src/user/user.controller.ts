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
import { UserService } from './user.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamCreate, ParamGet } from './user.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { dataConstants, roleConstants } from 'src/auth/constants';
import { OemEntity } from 'src/oem/oem.entity';
import { Op } from 'sequelize';

@Controller('user')
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/get')
  @Roles(roleConstants.oem_admin, roleConstants.master_admin)
  async get(@Query() query: ParamGet, @Req() request) {
    const { user } = request;
    let param = { ...pagination(query), where: {} };
    if (user?.type_admin === dataConstants.oem_admin) {
      param.where = {
        id_oem: user?.id,
      };
    }
    if (query?.email?.length) {
      param.where = {
        ...param.where,
        email: {
          [Op.like]: `%${query.email}%`,
        },
      };
    }
    if (query?.name?.length) {
      param.where = {
        ...param.where,
        name: {
          [Op.like]: `%${query.name}%`,
        },
      };
    }
    if (query?.phone?.length) {
      param.where = {
        ...param.where,
        phone: {
          [Op.like]: `%${query.phone}%`,
        },
      };
    }
    if (query?.vin?.length) {
      param.where = {
        ...param.where,
        vin: {
          [Op.like]: `%${query.vin}%`,
        },
      };
    }
    if (query?.imei?.length) {
      param.where = {
        ...param.where,
        imei: {
          [Op.like]: `%${query.imei}%`,
        },
      };
    }
    if (query?.last_login?.length) {
      const last_login_split = query?.last_login.split(',');
      param.where = {
        ...param.where,
        last_login: {
          [Op.between]: last_login_split,
        },
      };
    }
    if (query?.last_activities?.length) {
      const last_activities_split = query?.last_activities.split(',');
      param.where = {
        ...param.where,
        last_activities: {
          [Op.between]: last_activities_split,
        },
      };
    }
    const responseData = await this.userService.getService(param);
    return responeSuccess({
      total: responseData.count,
      data: responseData.rows,
    });
  }

  @Post('/create')
  @Roles(roleConstants.oem_admin, roleConstants.master_admin)
  async create(@Body() body: ParamCreate, @Req() request) {
    const { user } = request;
    let param = body;
    if (user?.type_admin === dataConstants.oem_admin) {
      param.id_oem = user?.id;
    }
    const responseData = await this.userService.createService(param);
    return responeSuccess({
      data: responseData,
    });
  }

  @Post('/update')
  @Roles(roleConstants.oem_admin, roleConstants.master_admin)
  async update(@Body() body: ParamCreate) {
    const responseData = await this.userService.updateService({
      ...body,
      id_oem: 1,
    });
    return responeSuccess({
      data: responseData,
    });
  }

  @Delete('/delete/:id')
  @Roles(roleConstants.oem_admin, roleConstants.master_admin)
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    const responseData = await this.userService.deleteService(id);
    return responeSuccess({
      data: responseData,
    });
  }

  @Get('/detail/:id')
  @Roles(roleConstants.oem_admin, roleConstants.master_admin)
  async detail(@Param('id', new ParseIntPipe()) id: number) {
    const responseData = await this.userService.detailService({
      where: {
        id,
      },
      attributes: [
        'name',
        'email',
        'phone',
        'vin',
        'imei',
        'odometer',
        'next_service',
        'id_oem',
        'last_login',
        'last_activities',
        'created_at',
      ],
      include: [
        {
          model: OemEntity,
          attributes: ['id', 'name'],
        },
      ],
    });
    return responeSuccess({
      data: responseData,
    });
  }
}
