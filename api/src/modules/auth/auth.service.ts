import { JwtHelperService } from '@auth/helper/jwt.helper';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@user/entity/user.entity';
import { IUser } from '@user/interface/user.interface';
import * as argon2 from 'argon2';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { ILogin, ISignup } from '@auth/interface/auth.interface';
import { omit } from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly jwtHelperService: JwtHelperService,
  ) {}

  async validateUser(payload: ILogin) {
    const { username, password } = payload;
    const user = await this.userRepo.findOne({ where: { phone: username } });
    if (user) {
      const isPasswordMatch = await argon2.verify(user.password, password);
      if (isPasswordMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  login({ user, res }: { user: IUser; res: Response }) {
    const accessToken = this.jwtHelperService.generateAccessToken({
      id: user.id,
      phone: user.phone,
    });

    const refreshToken = this.jwtHelperService.generateRefreshToken({
      id: user.id,
      phone: user.phone,
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return {
      accessToken,
      user,
    };
  }

  async signup({ payload, res }: { payload: ISignup; res: Response }) {
    try {
      const existingUser = await this.userRepo.findOne({ where: { phone: payload.phone } });
      if (existingUser) {
        throw new BadRequestException('User already exists');
      }
      const hash = await argon2.hash(payload.password);
      const user = await this.userRepo.save({
        phone: payload.phone,
        password: hash,
      });
      const accessToken = this.jwtHelperService.generateAccessToken({
        id: user.id,
        phone: user.phone,
      });

      const refreshToken = this.jwtHelperService.generateRefreshToken({
        id: user.id,
        phone: user.phone,
      });

      res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      return {
        accessToken,
        user: omit(user, ['password']),
      };
    } catch (error) {
      throw error;
    }
  }

  async getAccessToken(req: Request) {
    const refreshToken = req.cookies['refresh_token'];
    if (!refreshToken) {
      throw new NotFoundException('No refresh token found');
    }
    try {
      const decoded = await this.jwtHelperService.verifyRefreshToken(refreshToken);
      const existingUser = await this.userRepo.findOne({
        where: {
          id: decoded.id,
        },
      });
      if (!existingUser) {
        throw new BadRequestException('User not found');
      }
      if (!existingUser) {
        throw new NotFoundException('User not found');
      }
      const accessToken = this.jwtHelperService.generateAccessToken({
        id: decoded.id,
        phone: decoded.phone,
      });
      return {
        accessToken,
      };
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new UnauthorizedException('Refresh token has expired. Please log in again.');
      }
      throw new UnauthorizedException('Invalid or malformed refresh token');
    }
  }

  async logout({ res }: { res: Response }) {
    res.clearCookie('refresh_token');
    return {
      message: 'Logout success',
    };
  }
}
