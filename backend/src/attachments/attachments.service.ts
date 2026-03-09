import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AttachmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: {
    originalName: string;
    mimeType: string;
    size: number;
    data: Uint8Array;
  }) {
    const bytes = new Uint8Array(input.data.byteLength);
    bytes.set(input.data);

    return await this.prisma.attachment.create({
      data: {
        originalName: input.originalName,
        mimeType: input.mimeType,
        size: input.size,
        data: bytes,
      },
      select: { id: true, originalName: true, mimeType: true, size: true },
    });
  }

  async getById(id: string) {
    const attachment = await this.prisma.attachment.findUnique({
      where: { id },
    });
    if (!attachment) throw new NotFoundException('Attachment not found');
    return attachment;
  }
}
