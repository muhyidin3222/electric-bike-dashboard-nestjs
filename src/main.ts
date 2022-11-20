import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from 'src/common/library/http-exception.filter';
import { JoinValidationPipe } from 'src/common/library/validation.pipe';
import { ConfigService } from 'src/common/library/config.service';
import { runInCluster } from './common/library/runInCluster';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8000',
  'http://localhost',
  'http://103.150.89.27:5173',
  'http://103.150.89.27:8000',
  'http://103.150.89.27',
];

async function bootstrap() {
  const configService = new ConfigService();
  const port: any = configService.get('PORT');
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new JoinValidationPipe());
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    optionsSuccessStatus: 200,
  });
  app.use(cookieParser());
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );

  await app.listen(port);
}

runInCluster(bootstrap);
