import { Request } from 'express';

export interface IRequestAuth<T> extends Request {
  user: T;
}

export interface IQueryParams {
  page?: string;
  limit?: string;
  search?: string;
}
