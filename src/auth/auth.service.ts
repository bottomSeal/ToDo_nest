import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAlreadyExistsException } from 'src/exceptions/user-already-exists.exeption';
import { Token } from 'src/models/Token.model';
import { User } from 'src/models/User.model';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from 'src/users/dto/sign-in.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User,

        @Inject('TOKENS_REPOSITORY')
        private tokensRepository: typeof Token
    ) {}

    async verifyToken(xAccessToken: string): Promise<boolean> {
        const accessToken = xAccessToken.slice(0, 20);
        const userId = xAccessToken.slice(20);
        const token = await this.tokensRepository.findOne({ where: { value: accessToken, userId: userId} });
        if (!token) {
            console.log("hasdads");
            throw new UnauthorizedException('Invalid token');
        }
        return true;
    }

    async getAllTokensForUser(userId: string): Promise<Token[]> {
        return this.tokensRepository.findAll();
    }

    async signUp(createUserDto: CreateUserDto): Promise<String> {
        const { email, username, password } = createUserDto;

        const userWithSameEmail = await this.usersRepository.findOne({ where: { email } });
        if (userWithSameEmail) {
            throw new UserAlreadyExistsException(`User with email ${email} already exists`);
        }

        const userWithSameUsername = await this.usersRepository.findOne({ where: { username } });
        if (userWithSameUsername) {
            throw new UserAlreadyExistsException(`User with username ${username} already exists`);
        }

        await this.usersRepository.create({...createUserDto});

        return await this.signIn({ username, password });
    }

    async signIn(signInDto: SignInDto): Promise<String> {
        const user = await this.usersRepository.findOne({ where: {...signInDto} }) 
        if (!user) {
            throw new UnauthorizedException('Invalid username or password');
        }
        
        const tokenValue = nanoid(20);
        await Token.create({ value: tokenValue, userId: user.userId });

        const xAccessToken = tokenValue + user.userId;
        return xAccessToken;
    }
}
