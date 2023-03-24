import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ToDo } from './models/ToDo.model';

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
      }), SequelizeModule.forFeature([ToDo])],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule {}
