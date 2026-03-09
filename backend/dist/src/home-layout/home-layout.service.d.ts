import { PrismaService } from '../prisma/prisma.service';
import { UpdateHomeLayoutDto } from './dto/update-home-layout.dto';
export declare class HomeLayoutService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private getOrCreate;
    getLayout(): Promise<{
        heroLayout: "image-text" | "text-image" | "centered";
        id: string;
        updatedAt: Date;
        heroImagePosition: import("@prisma/client").$Enums.HeroImagePosition;
        sectionsOrder: import("@prisma/client/runtime/client").JsonValue;
        showFeaturedProjects: boolean;
    }>;
    updateLayout(dto: UpdateHomeLayoutDto): Promise<{
        heroLayout: "image-text" | "text-image" | "centered";
        id: string;
        updatedAt: Date;
        heroImagePosition: import("@prisma/client").$Enums.HeroImagePosition;
        sectionsOrder: import("@prisma/client/runtime/client").JsonValue;
        showFeaturedProjects: boolean;
    }>;
    getDefaultLayout(): {
        heroLayout: "image-text" | "text-image" | "centered";
        heroImagePosition: "left";
        sectionsOrder: ("about" | "experience" | "projects" | "certifications" | "tools" | "contact" | "hero")[];
        showFeaturedProjects: boolean;
    };
}
