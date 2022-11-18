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
// import { HttpExceptionFilter } from '../config/http-exception.filter';
import { AuthService } from './auth.service';
// import { JoinValidationPipe } from '../config/validation.pipe';
import { ParamAuthDto, ParamSendWaDto, ParamValidationWaDto } from './auth.dto';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { Throttle } from '@nestjs/throttler';
import { RealIP } from 'nestjs-real-ip';

@Controller('v1/auth')
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

  // @Post('/sendOtp')
  // @UseGuards(JwtAuthGuard)
  // @UseFilters(HttpExceptionFilter)
  // @UsePipes(JoinValidationPipe)
  // async sendOtp(@Request() req, @Body() body: ParamSendWaDto) {
  //   const resSendOtp = await this.authService.sendOtp(req, body);
  //   return this.responeCustome.responeSuccess({
  //     data: resSendOtp,
  //   });
  // }

  // @Post('/validationOtp')
  // @UseGuards(JwtAuthGuard)
  // @UseFilters(HttpExceptionFilter)
  // @UsePipes(JoinValidationPipe)
  // async validationOtp(@Request() req, @Body() body: ParamValidationWaDto) {
  //   const resValidationOtp = await this.authService.validationOtp(req, body);
  //   return this.responeCustome.responeSuccess({
  //     data: resValidationOtp,
  //   });
  // }

  // @UseGuards(JwtAuthGuard)
  // @UseFilters(HttpExceptionFilter)
  // @UsePipes(JoinValidationPipe)
  // @Delete('/deleteAccount/:id')
  // async deleteAccount(@Param() param, @Request() req): Promise<any> {
  //   if (req.user.id === param.id) {
  //     const resUserDetail = await this.authService.deleteAccount(param.id);
  //     return this.responeCustome.responeSuccess({
  //       data: resUserDetail,
  //     });
  //   } else {
  //     throw new BadRequestException('id user not same white token');
  //   }
  // }
}
