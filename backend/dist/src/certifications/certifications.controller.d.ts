import { CertificationsService } from './certifications.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
export declare class CertificationsController {
    private readonly certificationsService;
    constructor(certificationsService: CertificationsService);
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    create(dto: CreateCertificationDto): Promise<any>;
    update(id: string, dto: UpdateCertificationDto): Promise<any>;
    remove(id: string): Promise<any>;
}
