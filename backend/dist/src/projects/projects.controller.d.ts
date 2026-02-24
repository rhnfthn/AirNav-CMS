import { type CurrentUser } from '../auth/decorators/current-user.decorator';
import { CreateProjectDto } from './dto/create-project.dto';
import { ListProjectsQueryDto } from './dto/list-projects.query.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    list(query: ListProjectsQueryDto): Promise<{
        items: {
            id: string;
            createdAt: Date;
            title: string;
            description: string;
            content: string;
            image: string | null;
            published: boolean;
            slug: string;
            authorId: string;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getBySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        slug: string;
        authorId: string;
    }>;
    create(user: CurrentUser, dto: CreateProjectDto): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        slug: string;
        authorId: string;
    }>;
    update(id: string, dto: UpdateProjectDto): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        content: string;
        image: string | null;
        published: boolean;
        slug: string;
        authorId: string;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
