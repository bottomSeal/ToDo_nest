import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from 'src/users/dto/sign-in.dto';
import { Token } from 'src/models/Token.model';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signUp')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<String> { 
        return this.authService.signUp(createUserDto);
    }

    @Get('signIn')
    async signIn(@Body() signInDto: SignInDto): Promise<String> {
        return this.authService.signIn(signInDto);
    }

    @Get('tokens')
    async getAllTokensForUser(@Body() userId: string): Promise<Token[]> {
        return this.authService.getAllTokensForUser(userId);
    }
}
