import { literal } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'oem',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class OemEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: Number;

  @Column({
    allowNull: true,
    type: STRING(150),
  })
  pic_name: string;

  @Column({
    allowNull: false,
    type: STRING(100),
  })
  pic_email: string;

  @Column({
    allowNull: false,
    type: STRING(100),
  })
  pic_phone_number: string;

  @Column({
    allowNull: false,
    type: STRING(100),
  })
  last_status: string;

  @Column({
    allowNull: false,
    type: STRING(100),
  })
  date_last_status: string;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  status_active: Number;

  @Column({
    allowNull: true,
    type: STRING(250),
  })
  logo: string;

  @Column({
    allowNull: false,
    type: STRING(100),
  })
  name: string;

  @Column({
    allowNull: true,
    type: STRING(100),
  })
  customer_service_phone_number: string;

  @Column({
    allowNull: true,
    type: STRING(150),
  })
  instagram: string;

  @Column({
    allowNull: true,
    type: STRING(150),
  })
  website: string;

  @Column({
    allowNull: true,
    type: STRING(400),
  })
  address: string;

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
