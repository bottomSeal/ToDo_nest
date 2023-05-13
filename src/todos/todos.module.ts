import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosProvider } from './todos.providers';
import { DatabaseModule } from 'src/database/database.module';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { AuthService } from 'src/auth/auth.service';
import { TokensProvider } from 'src/tokens/token.providers';
import { UsersProvider } from 'src/users/users.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [TodosController],
    providers: [TodosService,
        ...TodosProvider,
        AuthService,
        ...TokensProvider,
        ...UsersProvider
    ],
})
export class TodosModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(TodosController);
    }
}