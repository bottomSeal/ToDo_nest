import { Injectable } from '@nestjs/common';
import { ToDo } from './models/ToDo.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodosService {
    constructor(@InjectModel(ToDo) private todoModel: typeof ToDo) {}

    async findAll(): Promise<ToDo[]> {
        return this.todoModel.findAll();
    }

    async findById(id: string): Promise<ToDo> {
        return this.todoModel.findByPk(id);
    }

    async create(todo: ToDo): Promise<ToDo> {
        return this.todoModel.create(todo);
    }

    async update(id: string, todo: ToDo): Promise<ToDo> {
        const existingToDo = await this.todoModel.findByPk(id);
        if (!existingToDo) {
            throw new Error('ToDo not found');
        }
        return existingToDo.update(todo);
    }

    async delete(id: string): Promise<void> {
        const todo = await this.todoModel.findByPk(id);
        if (!todo) {
            throw new Error('ToDo not found');
        }
        await todo.destroy();
    }

    async deleteAll(): Promise<void> {
        await this.todoModel.destroy({ truncate: true });
    }
}
