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
            title: string;
            slug: string;
            description: string;
            content: string;
            image: string | null;
            published: boolean;
            createdAt: Date;
            authorId: string;
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
        title: string;
        slug: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        createdAt: Date;
        authorId: string;
    }[]>;
    getBySlug(slug: string): Promise<{
        id: string;
        title: string;
        slug: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        createdAt: Date;
        authorId: string;
    }>;
    getById(id: string): Promise<{
        id: string;
        title: string;
        slug: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        createdAt: Date;
        authorId: string;
    }>;
    create(dto: CreateProjectDto): Promise<{
        id: string;
        title: string;
        slug: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        createdAt: Date;
        authorId: string;
    }>;
    update(id: string, dto: UpdateProjectDto): Promise<{
        id: string;
        title: string;
        slug: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        createdAt: Date;
        authorId: string;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
    private generateUniqueSlug;
}
