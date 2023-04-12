import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosProvider } from './todos.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [TodosController],
    providers: [TodosService, 
        ...TodosProvider,
    ],
})
export class TodosModule {}
