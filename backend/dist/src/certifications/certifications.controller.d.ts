import { CertificationsService } from './certifications.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
export declare class CertificationsController {
    private readonly certificationsService;
    constructor(certificationsService: CertificationsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        title: string;
        credentialUrl: string | null;
        issuer: string;
        year: number;
        imageUrl: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        credentialUrl: string | null;
        issuer: string;
        year: number;
        imageUrl: string | null;
    }>;
    create(dto: CreateCertificationDto): import("@prisma/client").Prisma.Prisma__CertificationClient<{
        id: string;
        title: string;
        credentialUrl: string | null;
        issuer: string;
        year: number;
        imageUrl: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateCertificationDto): Promise<{
        id: string;
        title: string;
        credentialUrl: string | null;
        issuer: string;
        year: number;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        credentialUrl: string | null;
        issuer: string;
        year: number;
        imageUrl: string | null;
    }>;
}
