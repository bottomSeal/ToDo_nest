import { Inject, Injectable } from '@nestjs/common';
import { Token } from 'src/models/Token.model';
import { User } from 'src/models/User.model';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User,

        @Inject('TOKENS_REPOSITORY')
        private tokensRepository: typeof Token
    ) {}
}
