import type { Request, Response } from 'express';
import { AttachmentsService } from './attachments.service';
export declare class AttachmentsController {
    private readonly attachments;
    constructor(attachments: AttachmentsService);
    upload(file: Express.Multer.File, req: Request): Promise<{
        id: string;
        url: string;
        path: string;
        originalName: string;
        mimeType: string;
        size: number;
    }>;
    getFile(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
