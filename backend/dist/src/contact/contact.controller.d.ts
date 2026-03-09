import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(dto: CreateContactDto): import("@prisma/client").Prisma.Prisma__ContactMessageClient<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        message: string;
        read: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(page?: string, limit?: string): Promise<{
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
    getUnreadCount(): Promise<{
        unreadCount: number;
    }>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
        message: string;
        read: boolean;
    }>;
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
}
