import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'qwerty',
    database: 'postgres',
    models: [__dirname + '/*/models/*.model.ts'],
    autoLoadModels: true,
  }), TodosModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
