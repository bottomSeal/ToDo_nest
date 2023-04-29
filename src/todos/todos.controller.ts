import { Controller, Get, Post, Patch, Delete, Param, Body, Req } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateToDoDto } from './dto/create-todo.dto';
import { UpdateToDoDto } from './dto/update-todo.dto';
import { ToDo } from 'src/models/ToDo.model';
import { Request } from 'express';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    async findAll(@Req() req: Request): Promise<ToDo[]> {
        return this.todosService.findAll(req['userId']);
    }

    @Get(':id')
    async findById(@Param('id') id: string, @Req() req: Request): Promise<ToDo> {
        return this.todosService.findById(id, req['userId']);
    }

    @Post()
    async create(@Body() сreateToDoDto: CreateToDoDto, @Req() req: Request): Promise<ToDo> {
        return this.todosService.create(сreateToDoDto, req['userId']);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateToDoDto, @Req() req: Request): Promise<ToDo> {
        return this.todosService.update(id, updateTodoDto, req['userId']);
    }

    @Patch(':id/completed')
    async setCompleting(@Param('id') id: string, @Req() req: Request): Promise<ToDo> {
        return this.todosService.setCompleting(id, req['userId']);
    }
    
    @Delete(':id')
    async delete(@Param('id') id: string, @Req() req: Request): Promise<void> {
        return this.todosService.delete(id, req['userId']);
    }

    @Delete()
    async deleteAll(@Req() req: Request): Promise<void> {
        return this.todosService.deleteAll(req['userId']);
    }
}
