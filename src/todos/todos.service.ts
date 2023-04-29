import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-todo.dto';
import { UpdateToDoDto } from './dto/update-todo.dto';
import { ToDo } from 'src/models/ToDo.model';

@Injectable()
export class TodosService {
    constructor(
        @Inject('TODOS_REPOSITORY')
        private todosRepository: typeof ToDo
    ) {}

    async findAll(userId: string): Promise<ToDo[]> {
        return await this.todosRepository.findAll({ where: {userId: userId} });
    }

    async findById(id: string, userId: string): Promise<ToDo> {
        const todo = await this.todosRepository.findOne({ where: {id: id, userId: userId} });
        if (!todo) {
            throw new NotFoundException('ToDo not found');
        }
        return todo;
    }

    async create(todo: CreateToDoDto, userId: string): Promise<ToDo> {
        return this.todosRepository.create({...todo, userId: userId});
    }

    async update(id: string, updateData: UpdateToDoDto, userId: string): Promise<ToDo> {
        const existingToDo = await this.findById(id, userId);
        return existingToDo.update(updateData);
    }

    async setCompleting(id: string, userId: string): Promise<ToDo> {
        const existingToDo = await this.findById(id, userId);
        return existingToDo.update({ "isCompleted": !existingToDo.isCompleted });
    }

    async delete(id: string, userId: string): Promise<void> {
        const todo = await this.findById(id, userId);
        await todo.destroy();
    }

    async deleteAll(userId: string): Promise<void> {
        await this.todosRepository.destroy({ where: {userId: userId} });
    }
}
