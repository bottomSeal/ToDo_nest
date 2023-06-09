import { Table, Column, Model, CreatedAt, HasMany } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { ToDo } from './ToDo.model';
import { Token } from './Token.model';

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
        unique: true,
        allowNull: false,
    })
    username: string;

    @HasMany(() => ToDo)
    todos: ToDo[];

    @CreatedAt
    createdAt: Date;

    @HasMany(() => Token)
    token: Token[];
}