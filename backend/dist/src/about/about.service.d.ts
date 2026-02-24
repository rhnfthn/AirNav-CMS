import { PrismaService } from '../prisma/prisma.service';
import { UpdateAboutDto } from './dto/update-about.dto';
export declare class AboutService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAbout(): Promise<any>;
    updateAbout(dto: UpdateAboutDto): Promise<any>;
}
