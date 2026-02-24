import { ExperiencesService } from './experiences.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
export declare class ExperiencesController {
    private readonly experiencesService;
    constructor(experiencesService: ExperiencesService);
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
