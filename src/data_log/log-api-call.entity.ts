import { literal } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'log_api_call',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class LogApiCallEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: Number;

  @Column({
    allowNull: true,
    type: STRING(300),
  })
  url: string;

  @Column({
    allowNull: true,
    type: STRING(50),
  })
  method: string;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  id_user: Number;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  id_oem: Number;

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
