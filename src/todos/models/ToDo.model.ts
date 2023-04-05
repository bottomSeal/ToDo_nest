import { Table, Column, Model, CreatedAt } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table({ tableName: "todos" })
export class ToDo extends Model<ToDo> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false
  })
  id: string;

  @Column({
    type: DataType.STRING,
    defaultValue: "Title",
    allowNull: false
  })
  title: string;

  @Column({
    type: DataType.STRING,
    defaultValue: "",
    allowNull: true
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false
  })
  isCompleted: boolean;

  @CreatedAt
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: null,
    allowNull: true
  })
  dueDate: Date;
}