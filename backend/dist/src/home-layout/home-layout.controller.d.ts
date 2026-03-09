import { UpdateHomeLayoutDto } from './dto/update-home-layout.dto';
import { HomeLayoutService } from './home-layout.service';
export declare class HomeLayoutController {
    private readonly homeLayoutService;
    constructor(homeLayoutService: HomeLayoutService);
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
    getDefaults(): {
        heroLayout: "image-text" | "text-image" | "centered";
        heroImagePosition: "left";
        sectionsOrder: ("about" | "experience" | "projects" | "certifications" | "tools" | "contact" | "hero")[];
        showFeaturedProjects: boolean;
    };
}
