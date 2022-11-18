import { Table, Column, Model, DataType, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';

const { STRING, INTEGER } = DataType

@Table({
    tableName: "log_login"
})
export class LogLoginEntity extends Model {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: STRING,
        autoIncrement: true,
    })
    id: string

    @Column({
        allowNull: false,
        type: STRING
    })
    email: string

    @Column({
        allowNull: false,
        type: STRING
    })
    password: string

    @Column({
        allowNull: false,
        type: STRING
    })
    type_user: string
    
    @Column({
        field: 'created_at',
        type: STRING,
    })
    created_at: string;

    @Column({
        field: 'updated_at',
        type: STRING,
    })
    updated_at: string;

    @Column({
        field: 'deleted_at',
        type: STRING,
    })
    deleted_at: string;
}