export declare const HOME_SECTIONS: readonly ["hero", "about", "projects", "certifications", "experience", "tools", "contact"];
export type HomeSectionKey = (typeof HOME_SECTIONS)[number];
export declare class UpdateHomeLayoutDto {
    heroImagePosition?: 'left' | 'right' | 'center';
    heroLayout?: 'image-text' | 'text-image' | 'centered';
    sectionsOrder?: HomeSectionKey[];
    showFeaturedProjects?: boolean;
}
