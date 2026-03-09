import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(page?: number, limit?: number): Promise<{
        data: {
            id: string;
            name: string;
            email: string;
            createdAt: Date;
            message: string;
            read: boolean;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        message: string;
        read: boolean;
    }>;
    create(dto: CreateContactDto): import("@prisma/client").Prisma.Prisma__ContactMessageClient<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        message: string;
        read: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    markAsRead(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        message: string;
        read: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        message: string;
        read: boolean;
    }>;
    getUnreadCount(): Promise<{
        unreadCount: number;
    }>;
}
