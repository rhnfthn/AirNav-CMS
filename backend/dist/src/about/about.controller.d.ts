import { AboutService } from './about.service';
import { UpdateAboutDto } from './dto/update-about.dto';
export declare class AboutController {
    private readonly aboutService;
    constructor(aboutService: AboutService);
    getAbout(): Promise<any>;
    updateAbout(dto: UpdateAboutDto): Promise<any>;
}
