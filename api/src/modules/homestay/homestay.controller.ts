import { Controller, Get, Param, Query } from '@nestjs/common';
import { HomestayService } from '@homestay/homestay.service';
import { ApiOperation } from '@nestjs/swagger';
import { GetHomeStayListDto } from '@homestay/dto/homestay.dto';

@Controller('homestay')
export class HomestayController {
  constructor(private readonly homestayService: HomestayService) {}

  @ApiOperation({ summary: 'Get all homestays' })
  @Get()
  getHomeStayList(@Query() query: GetHomeStayListDto) {
    return this.homestayService.getHomeStayList(query);
  }

  @ApiOperation({ summary: 'Get homestay by id' })
  @Get(':id')
  getHomeStayById(@Param('id') id: string) {
    return this.homestayService.getHomeStayById(id);
  }
}
