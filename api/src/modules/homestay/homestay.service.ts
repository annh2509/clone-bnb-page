import { IQueryParams } from '@common/interface/common.interface';
import { HomestayEntity } from '@homestay/entity/homestay.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getQueryParamsResult } from 'src/utils/pagination.utils';
import { Repository } from 'typeorm';

@Injectable()
export class HomestayService {
  constructor(
    @InjectRepository(HomestayEntity)
    private readonly homestayRepo: Repository<HomestayEntity>,
  ) {}

  async getHomeStayList(queryParams: IQueryParams) {
    try {
      const { skip, take, limit, page, search } = getQueryParamsResult(queryParams);
      const queryBuilder = this.homestayRepo.createQueryBuilder('homestay');
      if (search) {
        queryBuilder.where('unaccent(homestay.location) ILIKE unaccent(:search)', {
          search: `%${search}%`,
        });
      }
      const [data, count] = await queryBuilder
        .orderBy('homestay.createdAt', 'DESC')
        .skip(skip)
        .take(take)
        .getManyAndCount();
      return {
        data,
        meta: {
          page,
          limit,
          total: count,
        },
        message: 'success',
      };
    } catch (error) {
      throw error;
    }
  }

  async getHomeStayById(id: string) {
    try {
      const homestay = await this.homestayRepo.findOne({
        where: { id },
      });
      if (!homestay) {
        throw new NotFoundException('Homestay not found');
      }
      return {
        data: homestay,
        message: 'success',
      };
    } catch (error) {
      throw error;
    }
  }
}
