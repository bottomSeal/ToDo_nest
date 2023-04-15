import { Table, Column, Model, CreatedAt, HasMany } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { ToDo } from 'src/todos/models/ToDo.model';

@Table({ tableName: "users" })
export class User extends Model {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    userId: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @HasMany(() => ToDo)
    todos: ToDo[];

    @CreatedAt
    createdAt: Date;
}