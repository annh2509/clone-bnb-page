import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@logger/logger.service';
import { GlobalExceptionFilter } from '@common/filter/global-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import { setupSwagger } from '@config/swagger.config';
import { LoggingInterceptor } from '@common/interceptor/logging.interceptor';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const swaggerPrefix: string = config.get<string>('SWAGGER_PREFIX');
  const httpAdapter = app.get(HttpAdapterHost);
  const port: number = config.get<number>('PORT');
  const nodeEnv: string = config.get<string>('NODE_ENV');
  const loggerService = app.get(LoggerService);

  app.setGlobalPrefix('v1/api');

  app.use(json({ limit: '150kb' }));
  app.use(urlencoded({ extended: true, limit: '150kb' }));

  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true,
  });
  app.use(cookieParser());

  app.useGlobalFilters(new GlobalExceptionFilter(httpAdapter, loggerService));
  app.useGlobalInterceptors(new LoggingInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  if (nodeEnv === 'dev') {
    setupSwagger({
      app,
      swaggerPrefix,
    });
  }

  await app.listen(port, () => {
    loggerService.log(`Server started on port ${port}`);
  });
}
bootstrap();
