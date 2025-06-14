import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ResponseFormat } from '../../core/dto/response-format.dto';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Error interno del servidor';
    let errorDetails = 'INTERNAL_SERVER_ERROR';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      message = 
        typeof exceptionResponse === 'object'
          ? (exceptionResponse as any).message || exception.message
          : exception.message;
      errorDetails = 
        typeof exceptionResponse === 'object'
          ? (exceptionResponse as any).error || exception.name
          : exception.name;
    }

    const errorResponse = new ResponseFormat({
      success: false,
      message,
      error: {
        code: status,
        details: errorDetails,
        timestamp: new Date().toISOString(),
      },
    });

    response.status(status).json(errorResponse);
  }
}