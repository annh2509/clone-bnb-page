import { AuthService } from '@auth/auth.service';
import { LoginDto, SignupDto } from '@auth/dto/auth.dto';
import { JwtAuthGuard } from '@auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from '@auth/guard/local-auth.guard';
import { IVerifyUser } from '@auth/interface/auth.interface';
import { IRequestAuth } from '@common/interface/common.interface';
import { Body, Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IUser } from '@user/interface/user.interface';
import { Response } from 'express';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login' })
  @Post('login')
  login(@Body() payload: LoginDto, @Request() req: IRequestAuth<IUser>, @Res() res: Response) {
    const response = this.authService.login({
      user: req.user,
      res,
    });
    return res.json(response);
  }

  @Post('signup')
  @ApiOperation({ summary: 'Signup' })
  async signup(@Body() payload: SignupDto, @Res() res: Response) {
    const response = await this.authService.signup({
      payload,
      res,
    });
    return res.json(response);
  }

  @Get('access-token')
  @ApiOperation({ summary: 'Refresh access token' })
  accessToken(@Request() req: any) {
    return this.authService.getAccessToken(req);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get profile' })
  @Get('profile')
  getProfile(
    @Request()
    req: IRequestAuth<IVerifyUser>,
  ) {
    return {
      user: req.user,
      message: 'get profile success',
    };
  }

  @ApiOperation({ summary: 'Logout' })
  @Post('logout')
  async logout(@Res() res: Response) {
    const response = await this.authService.logout({
      res,
    });
    return res.json(response);
  }
}
