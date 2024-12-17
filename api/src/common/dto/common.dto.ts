import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryParamsDto {
  @ApiPropertyOptional({
    type: String,
    description: 'Page number',
  })
  @IsOptional()
  @IsString()
  page: string;

  @ApiPropertyOptional({
    type: String,
    description: 'Limit number',
  })
  @IsOptional()
  @IsString()
  limit: string;
}
