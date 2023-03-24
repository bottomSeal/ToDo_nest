import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'qwerty',
        database: 'postgres',
        models: [__dirname + '/todos/models/ToDo.model.ts'],
        autoLoadModels: true,
      })],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule {}
