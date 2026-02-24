import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
export declare class ToolsController {
    private readonly toolsService;
    constructor(toolsService: ToolsService);
    findAll(): Promise<any>;
    findByCategory(): Promise<Record<string, any>>;
    findOne(id: string): Promise<any>;
    create(dto: CreateToolDto): Promise<any>;
    update(id: string, dto: UpdateToolDto): Promise<any>;
    remove(id: string): Promise<any>;
}
