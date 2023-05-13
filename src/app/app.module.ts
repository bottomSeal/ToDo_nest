import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodosModule } from '../todos/todos.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TodosModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
