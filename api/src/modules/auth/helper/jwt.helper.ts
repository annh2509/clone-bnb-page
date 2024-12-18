import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  IJwtAccessTokenPayload,
  IJwtRefreshTokenPayload,
  IVerifyAccessToken,
  IVerifyRefreshToken,
} from '@auth/interface/auth.interface';

@Injectable()
export class JwtHelperService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  generateAccessToken(payload: IJwtAccessTokenPayload) {
    return this.jwtService.sign(payload);
  }

  async verifyAccessToken(accessToken: string): Promise<IVerifyAccessToken> {
    return await this.jwtService.verifyAsync(accessToken);
  }

  generateRefreshToken(payload: IJwtRefreshTokenPayload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('RT_SECRET'),
      expiresIn: this.configService.get<string>('RT_EXPIRES_IN'),
    });
  }

  async verifyRefreshToken(refreshToken: string): Promise<IVerifyRefreshToken> {
    return await this.jwtService.verifyAsync(refreshToken, {
      secret: this.configService.get<string>('RT_SECRET'),
    });
  }
}
