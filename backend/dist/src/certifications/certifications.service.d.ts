import { PrismaService } from '../prisma/prisma.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
export declare class CertificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    create(dto: CreateCertificationDto): Promise<any>;
    update(id: string, dto: UpdateCertificationDto): Promise<any>;
    remove(id: string): Promise<any>;
}
