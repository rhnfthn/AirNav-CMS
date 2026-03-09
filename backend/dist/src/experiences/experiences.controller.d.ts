import { ExperiencesService } from './experiences.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
export declare class ExperiencesController {
    private readonly experiencesService;
    constructor(experiencesService: ExperiencesService);
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
