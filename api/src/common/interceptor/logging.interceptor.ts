import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest<Request>();
    const response = httpContext.getResponse();

    if (request.url === '/v1/api/health') {
      return next.handle();
    }

    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const handlerName = context.getHandler().name;
        const responseLog = {
          timestamp: new Date().toISOString(),
          level: 'info',
          requestId: request['requestId'],
          type: '[RESPONSE]',
          path: request.url,
          statusCode: response.statusCode,
          controller: handlerName,
          processingTime: `${Date.now() - now}ms`,
        };

        this.logger.log(JSON.stringify(responseLog));
      }),
    );
  }
}
