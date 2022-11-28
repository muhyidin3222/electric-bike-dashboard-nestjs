import {
  Controller,
  Post,
  UseGuards,
  Request,
  UseFilters,
  UsePipes,
  Body,
  Param,
  BadRequestException,
  Delete,
  Headers,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { ParamAuthDto, ParamSendWaDto, ParamValidationWaDto } from './auth.dto';
import { RealIP } from 'nestjs-real-ip';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Throttle(5, 10)
  @Post('/login')
  async login(@Body() userParamBody: ParamAuthDto) {
    const responseData = await this.authService.loginService(userParamBody);
    return {
      status_code: '200',
      status_message: 'Login success, your token will expire in 30 days.',
      data: responseData,
    };
  }

  @Throttle(5, 10)
  @Post('/user/login')
  async customerLogin(@Body() userParamBody: ParamAuthDto) {
    const responseData = await this.authService.loginCustomerService(
      userParamBody,
    );
    return {
      status_code: '200',
      status_message: 'Login success, your token will expire in 30 days.',
      data: responseData,
    };
  }
}
