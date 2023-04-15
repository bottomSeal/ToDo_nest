import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateToDoDto } from './dto/create-todo.dto';
import { UpdateToDoDto } from './dto/update-todo.dto';
import { ToDo } from 'src/models/ToDo.model';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    async findAll(): Promise<ToDo[]> {
        return this.todosService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<ToDo> {
        return this.todosService.findById(id);
    }

    @Post()
    async create(@Body() сreateToDoDto: CreateToDoDto): Promise<ToDo> {
        return this.todosService.create(сreateToDoDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateToDoDto): Promise<ToDo> {
        return this.todosService.update(id, updateTodoDto);
    }

    @Patch(':id/completed')
    async setCompleting(@Param('id') id: string): Promise<ToDo> {
        return this.todosService.setCompleting(id);
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.todosService.delete(id);
    }

    @Delete()
    async deleteAll(): Promise<void> {
        return this.todosService.deleteAll();
    }
}
