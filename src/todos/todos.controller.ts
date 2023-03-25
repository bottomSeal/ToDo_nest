import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { ToDo } from './models/ToDo.model';

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
    async create(@Body() todo: ToDo): Promise<ToDo> {
        return this.todosService.create(todo);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() todo: ToDo): Promise<ToDo> {
        return this.todosService.update(id, todo);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.todosService.delete(id);
    }
}
