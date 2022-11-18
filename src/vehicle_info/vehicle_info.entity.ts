import { literal } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { OemEntity } from 'src/oem/oem.entity';
const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'vehicle_info',
  paranoid: true,
  deletedAt: 'deletedAt',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class VehicleInfoEntity extends Model {
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
  image: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  color: string;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  type: number;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  id_oem: number;

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

  @BelongsTo(() => OemEntity, {
    targetKey: 'id',
    foreignKey: 'id_oem',
  })
  oem: OemEntity;
}
