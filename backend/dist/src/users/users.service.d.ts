import { PrismaService } from '../prisma/prisma.service';
import { Admin } from '@prisma/client';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<Admin | null>;
    createUser(params: {
        email: string;
        passwordHash: string;
        name?: string;
    }): Promise<Admin>;
    findById(id: string): Promise<Admin | null>;
}
