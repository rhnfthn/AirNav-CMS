export declare class CreateSiteLogoDto {
    name: string;
    imageUrl?: string;
    altText?: string;
    linkUrl?: string;
    position?: 'header' | 'footer' | 'both';
    isActive?: boolean;
}
