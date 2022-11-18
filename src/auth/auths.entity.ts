import { Table, Column, Model, DataType, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';

const { STRING, INTEGER } = DataType

@Table({
    tableName: "auths"
})
export class AuthEntity extends Model {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
    })
    id: number

    @Column({
        allowNull: false,
        type: STRING
    })
    email: string

    @Column({
        allowNull: true,
        type: STRING
    })
    ip: string

    @Column({
        allowNull: true,
        type: STRING
    })
    source: string

    @Column({
        allowNull: true,
        type: STRING
    })
    platform: string

    @Column({
        allowNull: true,
        type: STRING
    })
    os: string

    @Column({
        allowNull: true,
        type: STRING
    })
    version: string

    @Column({
        allowNull: true,
        type: STRING
    })
    browser: string

    @Column({
        allowNull: true,
        type: STRING
    })
    id_device: string

    @Column({
        allowNull: true,
        type: STRING
    })
    active: string

    @Column({
        allowNull: true,
        type: STRING
    })
    fcmToken: string

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