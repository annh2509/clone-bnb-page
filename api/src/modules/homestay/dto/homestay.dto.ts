import { QueryParamsDto } from '@common/dto/common.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetHomeStayListDto extends QueryParamsDto {
  @ApiPropertyOptional({
    type: String,
    description: 'Search query',
  })
  @IsOptional()
  @IsString()
  search: string;
}
