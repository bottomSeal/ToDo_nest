import { Injectable } from '@nestjs/common';
import { ToDo } from './models/ToDo.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodosService {
    constructor(@InjectModel(ToDo) private todoModel: typeof ToDo) {}

    async findAll(): Promise<ToDo[]> {
        return this.todoModel.findAll();
    }

    async create(user: ToDo): Promise<ToDo> {
        return this.todoModel.create(user);
    }
}
