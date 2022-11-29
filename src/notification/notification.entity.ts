import { literal } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'notification',
  paranoid: true,
  deletedAt: 'deletedAt',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class NotificationEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  name: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  code: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  date: string;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  id_user: Number;

  @Column({
    allowNull: false,
    type: DATE,
    defaultValue: literal('CURRENT_TIMESTAMP'),
  })
  created_at: Date;

  @Column({
    allowNull: false,
    type: DATE,
    defaultValue: literal('CURRENT_TIMESTAMP'),
  })
  updated_at: Date;

  @Column({
    allowNull: true,
    type: DATE,
  })
  deletedAt: Date;
}
