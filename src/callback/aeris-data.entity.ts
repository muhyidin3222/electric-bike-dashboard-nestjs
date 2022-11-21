import { literal } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'aeris_data',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class AerisDataEntity extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  })
  id: Number;

  @Column({
    allowNull: true,
    type: STRING(250),
  })
  vehicle_number: string;

  @Column({
    allowNull: false,
    type: STRING(100),
  })
  imei: string;

  @Column({
    allowNull: false,
    type: STRING(150),
  })
  vin: string;

  @Column({
    allowNull: true,
    type: STRING(100),
  })
  lat: string;

  @Column({
    allowNull: true,
    type: STRING(100),
  })
  lng: string;

  @Column({
    allowNull: true,
    type: STRING(100),
  })
  last_activation_date: string;

  @Column({
    allowNull: true,
    type: STRING(100),
  })
  license_expire_date: string;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  battery_level_percentage: Number;

  @Column({
    allowNull: true,
    type: STRING(100),
  })
  status: string;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  speed: number;

  @Column({
    allowNull: true,
    type: STRING(100),
  })
  odometer: string;

  @Column({
    allowNull: false,
    type: STRING(10),
  })
  power: string;

  @Column({
    allowNull: true,
    type: STRING(150),
  })
  service_status: string;

  @Column({
    allowNull: true,
    type: STRING(150),
  })
  next_status: string;

  @Column({
    allowNull: true,
    type: STRING(150),
  })
  next_service: string;

  @Column({
    allowNull: true,
    type: STRING(50),
  })
  phone_number: string;

  @Column({
    allowNull: false,
    type: STRING(100),
  })
  email: string;

  @Column({
    allowNull: true,
    type: STRING(500),
  })
  alerts: string;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  asset_id: number;

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
