import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(page?: number, limit?: number): Promise<{
        data: any;
        meta: {
            total: any;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<any>;
    create(dto: CreateContactDto): Promise<any>;
    markAsRead(id: string): Promise<any>;
    remove(id: string): Promise<any>;
    getUnreadCount(): Promise<{
        unreadCount: any;
    }>;
}
