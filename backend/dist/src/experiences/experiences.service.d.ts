import { PrismaService } from '../prisma/prisma.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
export declare class ExperiencesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
    }>;
    create(dto: CreateExperienceDto): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
    }>;
    update(id: string, dto: UpdateExperienceDto): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        description: string;
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
    }>;
}
