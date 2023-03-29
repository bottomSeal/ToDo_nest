import { Injectable, NotFoundException } from '@nestjs/common';
import { ToDo } from './models/ToDo.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodosService {
    constructor(@InjectModel(ToDo) private todoModel: typeof ToDo) {}

    async findAll(): Promise<ToDo[]> {
        return this.todoModel.findAll();
    }

    async findById(id: string): Promise<ToDo> {
        const todo = await this.todoModel.findByPk(id);
        if (!todo) {
            throw new NotFoundException('ToDo not found');
        }
        return todo;
    }

    async create(todo: ToDo): Promise<ToDo> {
        return this.todoModel.create(todo);
    }

    async update(id: string, todo: ToDo): Promise<ToDo> {
        const existingToDo = await this.findById(id);
        return existingToDo.update(todo);
    }

    async delete(id: string): Promise<void> {
        const todo = await this.findById(id);
        await todo.destroy();
    }

    async deleteAll(): Promise<void> {
        await this.todoModel.destroy({ truncate: true });
    }
}
