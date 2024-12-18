import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomestayEntity } from '@homestay/entity/homestay.entity';
import { HomestayService } from '@homestay/homestay.service';
import { HomestayController } from '@homestay/homestay.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HomestayEntity])],
  controllers: [HomestayController],
  providers: [HomestayService],
  exports: [],
})
export class HomestayModule {}
