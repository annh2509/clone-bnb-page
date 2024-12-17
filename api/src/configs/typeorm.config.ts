import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      url: configService.get<string>('BNB_APP_DATABASE_URL'),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false,
      logging: configService.get<string>('ENV') === 'local' ? ['query', 'error'] : false,
      schema: configService.get<string>('BNB_APP_DATABASE_SCHEMA'),
      applicationName: configService.get<string>('BNB_APP_NAME') || 'bnb-app',
    };
  },
};
