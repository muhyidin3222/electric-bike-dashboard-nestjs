import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ParamEmailDto, ParamCodeReferalDto } from './app.dto';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../common/library/image';
import { ConfigService } from 'src/common/library/config.service';

@Controller('/')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  main(): string {
    return this.appService.main();
  }

  @Throttle(5, 10)
  @Post('/send-email')
  async sendEmail(@Body() body: ParamEmailDto): Promise<string> {
    return 'sucess';
  }

  @Post('/upload_image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const URL_API = this.configService.get('URL_API');
    const response = {
      originalname: file.originalname,
      filename: file.filename,
      url: `${URL_API}/image/${file.filename}`,
    };
    return response;
  }

  @Get('image/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }

  @Get('/home/get')
  home(@Req() request): any {
    const { user } = request;
    return this.appService.homeDashboardChart(user?.id_oem);
  }
}
