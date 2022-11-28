import { literal } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { AerisDataEntity } from 'src/callback/aeris-data.entity';
import { OemEntity } from 'src/oem/oem.entity';
const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'user',
  paranoid: true,
  deletedAt: 'deletedAt',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class UserEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
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
    allowNull: true,
    type: STRING,
  })
  phone: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  password: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  vin: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  imei: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  odometer: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  next_service: string;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  id_oem: number;

  @Column({
    allowNull: true,
    type: STRING,
  })
  last_login: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  image: string;

  @Column({
    allowNull: true,
    type: STRING,
  })
  last_activities: string;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  count_active: Number;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  aeris_data_id: Number;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  vehicle_info_id: Number;

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

  @BelongsTo(() => AerisDataEntity, {
    targetKey: 'id',
    foreignKey: 'aeris_data_id',
  })
  aeris_data: AerisDataEntity;
}
