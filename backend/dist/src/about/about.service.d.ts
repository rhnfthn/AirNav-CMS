import { PrismaService } from '../prisma/prisma.service';
import { UpdateAboutDto } from './dto/update-about.dto';
export declare class AboutService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAbout(): Promise<{
        id: string;
        updatedAt: Date;
        title: string;
        description: string;
        photoUrl: string | null;
        university: string | null;
        major: string | null;
        gpa: number | null;
    }>;
    updateAbout(dto: UpdateAboutDto): Promise<{
        id: string;
        updatedAt: Date;
        title: string;
        description: string;
        photoUrl: string | null;
        university: string | null;
        major: string | null;
        gpa: number | null;
    }>;
}
