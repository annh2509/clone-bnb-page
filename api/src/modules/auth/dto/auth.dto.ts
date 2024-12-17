import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({
    description: 'Username',
    example: '0384974745',
  })
  username: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @ApiProperty({
    description: 'Password',
    example: '123123',
  })
  password: string;
}

export class SignupDto {
  @IsString()
  @ApiProperty({
    description: 'phone',
    example: '0384974745',
  })
  phone: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @ApiProperty({
    description: 'Password',
    example: '123123',
  })
  password: string;
}
