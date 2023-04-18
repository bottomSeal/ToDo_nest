import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { UsersProvider } from 'src/users/users.providers';
import { TokensProvider } from 'src/tokens/token.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...UsersProvider, ...TokensProvider]
})
export class AuthModule {}
