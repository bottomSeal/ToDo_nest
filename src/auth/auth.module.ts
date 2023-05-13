import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { UsersProvider } from 'src/users/users.providers';
import { TokensProvider } from 'src/tokens/token.providers';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...UsersProvider, ...TokensProvider]
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('/auth/logout');
  }
}
