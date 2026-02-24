import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        id: any;
        email: any;
        name: any;
        createdAt: any;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            name: any;
        };
    }>;
    getProfile(req: any): Promise<{
        id: any;
        email: any;
        name: any;
    }>;
}
