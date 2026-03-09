import { SiteLogosService } from './site-logos.service';
import { CreateSiteLogoDto } from './dto/create-site-logo.dto';
import { UpdateSiteLogoDto } from './dto/update-site-logo.dto';
export declare class SiteLogosController {
    private readonly siteLogosService;
    constructor(siteLogosService: SiteLogosService);
    findActive(position?: 'header' | 'footer' | 'both'): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        createdAt: Date;
        position: string;
        imageUrl: string | null;
        altText: string;
        linkUrl: string;
        isActive: boolean;
    }[]>;
    findAll(): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        createdAt: Date;
        position: string;
        imageUrl: string | null;
        altText: string;
        linkUrl: string;
        isActive: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        createdAt: Date;
        position: string;
        imageUrl: string | null;
        altText: string;
        linkUrl: string;
        isActive: boolean;
    }>;
    create(dto: CreateSiteLogoDto): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        createdAt: Date;
        position: string;
        imageUrl: string | null;
        altText: string;
        linkUrl: string;
        isActive: boolean;
    }>;
    update(id: string, dto: UpdateSiteLogoDto): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        createdAt: Date;
        position: string;
        imageUrl: string | null;
        altText: string;
        linkUrl: string;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        createdAt: Date;
        position: string;
        imageUrl: string | null;
        altText: string;
        linkUrl: string;
        isActive: boolean;
    }>;
}
