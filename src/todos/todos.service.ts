import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ToDo } from './models/ToDo.model';
import { CreateToDoDto } from './dto/create-todo.dto';
import { UpdateToDoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
    constructor(
        @Inject('TODOS_REPOSITORY')
        private todosRepository: typeof ToDo
    ) {}

    async findAll(): Promise<ToDo[]> {
        return this.todosRepository.findAll<ToDo>();
    }

    async findById(id: string): Promise<ToDo> {
        const todo = await this.todosRepository.findByPk(id);
        if (!todo) {
            throw new NotFoundException('ToDo not found');
        }
        return todo;
    }

    async create(todo: CreateToDoDto): Promise<ToDo> {
        return this.todosRepository.create(todo);
    }

    async update(id: string, updateData: UpdateToDoDto): Promise<ToDo> {
        const existingToDo = await this.findById(id);
        return existingToDo.update(updateData);
    }

    async setCompleting(id: string): Promise<ToDo> {
        const existingToDo = await this.findById(id);
        return existingToDo.update({ "isCompleted": !existingToDo.isCompleted });
    }

    async delete(id: string): Promise<void> {
        const todo = await this.findById(id);
        await todo.destroy();
    }

    async deleteAll(): Promise<void> {
        await this.todosRepository.destroy({ truncate: true });
    }
}
