import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(dto: CreateContactDto): Promise<any>;
    findAll(page?: string, limit?: string): Promise<{
        data: any;
        meta: {
            total: any;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getUnreadCount(): Promise<{
        unreadCount: any;
    }>;
    findOne(id: string): Promise<any>;
    markAsRead(id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
