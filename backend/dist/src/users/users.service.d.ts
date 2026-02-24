import { PrismaService } from '../prisma/prisma.service';
import { User, UserRole } from '@prisma/client';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<User | null>;
    createUser(params: {
        email: string;
        passwordHash: string;
        role?: UserRole;
    }): Promise<User>;
}
