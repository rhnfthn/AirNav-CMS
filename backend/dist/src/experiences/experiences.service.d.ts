import { PrismaService } from '../prisma/prisma.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
export declare class ExperiencesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
        description: string;
        id: string;
        authorId: string;
    }[]>;
    findOne(id: string): Promise<{
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
        description: string;
        id: string;
        authorId: string;
    }>;
    create(dto: CreateExperienceDto): Promise<{
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
        description: string;
        id: string;
        authorId: string;
    }>;
    update(id: string, dto: UpdateExperienceDto): Promise<{
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
        description: string;
        id: string;
        authorId: string;
    }>;
    remove(id: string): Promise<{
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
        description: string;
        id: string;
        authorId: string;
    }>;
}
