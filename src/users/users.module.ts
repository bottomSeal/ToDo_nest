import { Module } from '@nestjs/common';
import { UsersProvider } from './users.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [, 
        ...UsersProvider,
    ],
})
export class UsersModule {}
