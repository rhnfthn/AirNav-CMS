import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ListProjectsQueryDto } from './dto/list-projects.query.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(query: ListProjectsQueryDto): Promise<{
        items: {
            id: string;
            createdAt: Date;
            title: string;
            description: string;
            liveUrl: string | null;
            slug: string;
            content: string | null;
            techStack: string[];
            githubUrl: string | null;
            coverImage: string | null;
            published: boolean;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getPublished(): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        liveUrl: string | null;
        slug: string;
        content: string | null;
        techStack: string[];
        githubUrl: string | null;
        coverImage: string | null;
        published: boolean;
    }[]>;
    getBySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        liveUrl: string | null;
        slug: string;
        content: string | null;
        techStack: string[];
        githubUrl: string | null;
        coverImage: string | null;
        published: boolean;
    }>;
    getById(id: string): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        liveUrl: string | null;
        slug: string;
        content: string | null;
        techStack: string[];
        githubUrl: string | null;
        coverImage: string | null;
        published: boolean;
    }>;
    create(dto: CreateProjectDto): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        liveUrl: string | null;
        slug: string;
        content: string | null;
        techStack: string[];
        githubUrl: string | null;
        coverImage: string | null;
        published: boolean;
    }>;
    update(id: string, dto: UpdateProjectDto): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        liveUrl: string | null;
        slug: string;
        content: string | null;
        techStack: string[];
        githubUrl: string | null;
        coverImage: string | null;
        published: boolean;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
    private generateUniqueSlug;
}
