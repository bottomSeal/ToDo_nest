import { Table, Column, Model, CreatedAt, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { User } from 'src/users/models/User.model';

@Table({ tableName: "todos" })
export class ToDo extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false
  })
  todoId: string;

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

  @ForeignKey(() => User)
  @Column({
      type: DataType.UUID,
      allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;
}