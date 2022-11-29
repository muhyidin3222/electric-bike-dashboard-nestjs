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
import { DrivingScoringService } from './driving_scoring.service';
import responeSuccess from '../common/library/respone';
import { pagination } from 'src/common/library/pagination';
import { ParamCreate, ParamGet } from './driving_scoring.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { dataConstants } from 'src/auth/constants';

@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
@Controller('driving-scoring')
export class DrivingScoringController {
  constructor(private drivingScoringService: DrivingScoringService) {}

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
    return responeSuccess({
      total: responseData.count,
      data: responseData.rows,
    });
  }
}
