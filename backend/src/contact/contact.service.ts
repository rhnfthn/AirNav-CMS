import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [messages, total] = await Promise.all([
      this.prisma.contactMessage.findMany({
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.contactMessage.count(),
    ]);

    return {
      data: messages,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const message = await this.prisma.contactMessage.findUnique({
      where: { id },
    });
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }

  async create(dto: CreateContactDto) {
    return this.prisma.contactMessage.create({ data: dto });
  }

  async markAsRead(id: string) {
    await this.findOne(id);
    return this.prisma.contactMessage.update({
      where: { id },
      data: { read: true },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.contactMessage.delete({ where: { id } });
  }

  async getUnreadCount() {
    const count = await this.prisma.contactMessage.count({
      where: { read: false },
    });
    return { unreadCount: count };
  }
}
