import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AxiosError } from 'axios';
import { ApplicationError } from '@common/error/error';
import { first, get, isArray, omitBy } from 'lodash';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly logger: any,
  ) {}

  catch(exception: any, host: ArgumentsHost): void {
    // Capture exception
    // Sentry.captureException(exception);
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    let httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    let message: string, code: string;
    message = exception?.message;

    if (exception instanceof ApplicationError) {
      code = exception.code;
      message = exception.message;

      switch (exception.name) {
        case 'user_input_error':
          httpStatus = HttpStatus.BAD_REQUEST;
          break;
        case 'unauthorized_error':
          httpStatus = HttpStatus.UNAUTHORIZED;
          break;
        case 'forbidden':
          httpStatus = HttpStatus.FORBIDDEN;
          break;
        case 'not_found':
          httpStatus = HttpStatus.NOT_FOUND;
          break;
        default:
          httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
      }
    } else if (exception instanceof AxiosError) {
      if (exception?.response?.data?.message) {
        message = exception.response.data.message;
      }
      if (exception?.response?.data?.code) {
        code = exception.response.data.code;
      }
      if (exception?.response?.status) {
        httpStatus = exception.response.status;
      }
    } else if (exception instanceof BadRequestException) {
      if (isArray(get(exception.getResponse(), 'message'))) {
        code = first(get(exception.getResponse(), 'message'));
        message = code;
        if (code) code = code.toString().replace(/\s/g, '_');
      } else {
        code = get(exception.getResponse(), 'code');
      }
    }

    let responseBody: any = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message,
      code,
    };

    responseBody = omitBy(responseBody, (x) => x === null || x === undefined);

    const ignoredException =
      exception instanceof AxiosError ||
      exception instanceof UnauthorizedException ||
      exception instanceof ForbiddenException;

    if (!ignoredException && httpStatus !== HttpStatus.BAD_REQUEST) {
      this.logger.error(exception?.message, exception?.stack);
    }

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
