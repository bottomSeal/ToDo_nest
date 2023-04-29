import { Body, Controller, Get, Post, Req, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from 'src/users/dto/sign-in.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<String> { 
        return this.authService.signUp(createUserDto);
    }

    @Get('signin')
    async signIn(@Body() signInDto: SignInDto): Promise<String> {
        return this.authService.signIn(signInDto);
    }

    @Delete('logout')
    async logOut(@Req() req: Request): Promise<void> {
        return this.authService.logOut(req['userId']);
    }
}
