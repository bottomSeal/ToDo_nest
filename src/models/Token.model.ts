import { Table, Column, Model, CreatedAt, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { User } from './User.model';

@Table({ tableName: "token" })
export class Token extends Model {
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    value: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    userId: string;

    @BelongsTo(() => User)
    user: User;

    @CreatedAt
    createdAt: Date;
}
