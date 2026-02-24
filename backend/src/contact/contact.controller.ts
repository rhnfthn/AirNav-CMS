import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // Public endpoint - anyone can send a message
  @Post()
  create(@Body() dto: CreateContactDto) {
    return this.contactService.create(dto);
  }

  // Admin only - list all messages
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.contactService.findAll(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
  }

  // Admin only - get unread count
  @Get('unread-count')
  @UseGuards(JwtAuthGuard)
  getUnreadCount() {
    return this.contactService.getUnreadCount();
  }

  // Admin only - get single message
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  // Admin only - mark as read
  @Patch(':id/read')
  @UseGuards(JwtAuthGuard)
  markAsRead(@Param('id') id: string) {
    return this.contactService.markAsRead(id);
  }

  // Admin only - delete message
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
