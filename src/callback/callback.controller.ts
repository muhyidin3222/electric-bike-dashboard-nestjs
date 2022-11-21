import {
  Controller,
  Body,
  Post,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { CallbackService } from './callback.service';
import responeSuccess from '../common/library/respone';

@Controller('callback')
export class CallbackController {
  constructor(private callbackService: CallbackService) {}

  @Post('/create')
  async create(@Body() body: any, @Headers() headers: any) {
    if (!headers?.api_key) {
      throw new BadRequestException('Api key is required');
    }
    if (headers?.api_key === '81f75fe8-5355-4bd7-899b-7be6106a5cee') {
      await this.callbackService.createService(headers, body);
      return responeSuccess({
        data: body,
      });
    } else {
      throw new BadRequestException('Invalid api key');
    }
  }
}