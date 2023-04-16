import { Module } from '@nestjs/common';
import { TokensProvider } from './token.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [...TokensProvider]
})
export class TokensModule {}
