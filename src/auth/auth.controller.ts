import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/models/User.model';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signUp')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.authService.signUp(createUserDto);
    }

}
