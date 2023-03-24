import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { ToDo } from './models/ToDo.model';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    async findAll(): Promise<ToDo[]> {
        return this.todosService.findAll();
    }

    @Post()
    async create(@Body() todo: ToDo): Promise<ToDo> {
        return this.todosService.create(todo);
    }
}
