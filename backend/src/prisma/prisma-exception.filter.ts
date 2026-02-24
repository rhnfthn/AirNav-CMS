import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Default mapping
    let statusCode = HttpStatus.BAD_REQUEST;
    let message = 'Database error';

    if (exception.code === 'P2002') {
      statusCode = HttpStatus.CONFLICT;
      message = 'Unique constraint failed';
    }

    if (exception.code === 'P2025') {
      statusCode = HttpStatus.NOT_FOUND;
      message = 'Record not found';
    }

    response.status(statusCode).json({
      statusCode,
      message,
      code: exception.code,
    });
  }
}
