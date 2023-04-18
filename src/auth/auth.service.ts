import { Inject, Injectable } from '@nestjs/common';
import { Token } from 'src/models/Token.model';
import { User } from 'src/models/User.model';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User,

        @Inject('TOKENS_REPOSITORY')
        private tokensRepository: typeof Token
    ) {}

    async signUp(user: CreateUserDto): Promise<User> {
        return this.usersRepository.create({...user});
    }
}
