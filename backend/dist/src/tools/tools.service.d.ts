import { PrismaService } from '../prisma/prisma.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
export declare class ToolsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        iconUrl: string | null;
        category: string;
    }[]>;
    findByCategory(): Promise<Record<string, {
        id: string;
        name: string;
        iconUrl: string | null;
        category: string;
    }[]>>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        iconUrl: string | null;
        category: string;
    }>;
    create(dto: CreateToolDto): import("@prisma/client").Prisma.Prisma__ToolClient<{
        id: string;
        name: string;
        iconUrl: string | null;
        category: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateToolDto): Promise<{
        id: string;
        name: string;
        iconUrl: string | null;
        category: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        iconUrl: string | null;
        category: string;
    }>;
}
