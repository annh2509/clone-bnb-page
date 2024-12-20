import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import path = require('path');
import { LoggerModule } from '@logger/logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from '@config/typeorm.config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '@auth/auth.module';
import { HomestayModule } from '@homestay/homestay.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(__dirname, `../.env`),
      isGlobal: true,
    }),
    LoggerModule.register('clone-bnb'),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('AT_SECRET'),
        signOptions: { expiresIn: configService.get<string>('AT_EXPIRES_IN') },
      }),
      global: true,
      inject: [ConfigService],
    }),
    AuthModule,
    HomestayModule,
    ThrottlerModule.forRootAsync({
      useFactory: (configService: ConfigService) => [
        {
          ttl: configService.get<number>('THROTTLE_TTL') * 60 * 1000,
          limit: configService.get<number>('THROTTLE_LIMIT'),
          blockDuration: configService.get<number>('THROTTLE_BLOCK_DURATION') * 60 * 1000,
        },
      ],
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
