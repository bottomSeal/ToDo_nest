import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ToDo } from './models/ToDo.model';

@Module({
    imports: [SequelizeModule.forFeature([ToDo])],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule {}
