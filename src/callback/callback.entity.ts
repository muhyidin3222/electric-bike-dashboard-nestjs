import { literal } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'log_aeris_callback',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class CallbackEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: Number;

  @Column({
    allowNull: true,
    type: STRING,
  })
  headers: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  body: string;

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
