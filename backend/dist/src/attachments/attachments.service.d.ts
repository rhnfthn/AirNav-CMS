import { PrismaService } from '../prisma/prisma.service';
export declare class AttachmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: {
        originalName: string;
        mimeType: string;
        size: number;
        data: Uint8Array;
    }): Promise<{
        id: string;
        originalName: string;
        mimeType: string;
        size: number;
    }>;
    getById(id: string): Promise<{
        id: string;
        data: import("@prisma/client/runtime/client").Bytes;
        createdAt: Date;
        originalName: string;
        mimeType: string;
        size: number;
    }>;
}
