import { NUMBER } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { OemEntity } from 'src/oem/oem.entity';
import { literal } from 'sequelize';

const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'admin',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class AdminEntity extends Model {
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
  name: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  email: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  password: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  type_admin: string;

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
  deletedAt: string;

  @BelongsTo(() => OemEntity, {
    targetKey: 'id',
    foreignKey: 'id_oem',
  })
  oem: OemEntity;
}
