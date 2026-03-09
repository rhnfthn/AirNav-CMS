import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { memoryStorage } from 'multer';
import type { Request, Response } from 'express';
import { AttachmentsService } from './attachments.service';

@Controller('attachments')
export class AttachmentsController {
  constructor(private readonly attachments: AttachmentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
      },
    }),
  )
  async upload(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    if (!file) throw new BadRequestException('No file uploaded');

    const created = await this.attachments.create({
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      data: new Uint8Array(file.buffer),
    });

    const host = req.get('host');
    const protoHeader = req.get('x-forwarded-proto');
    const protocol = protoHeader
      ? String(protoHeader).split(',')[0]
      : req.protocol;
    const baseUrl = host ? `${protocol}://${host}` : '';

    const path = `/attachments/${created.id}`;
    const url = baseUrl ? `${baseUrl}${path}` : path;

    return {
      id: created.id,
      url,
      path,
      originalName: created.originalName,
      mimeType: created.mimeType,
      size: created.size,
    };
  }

  @Get(':id')
  async getFile(@Param('id') id: string, @Res() res: Response) {
    const attachment = await this.attachments.getById(id);

    res.setHeader('Content-Type', attachment.mimeType);
    res.setHeader('Content-Length', String(attachment.size));
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

    // Prisma returns Bytes as Buffer
    return res.send(attachment.data);
  }
}
