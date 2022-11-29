import { literal } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
const { STRING, INTEGER, DATE } = DataType;

@Table({
  tableName: 'trip_history',
  paranoid: true,
  deletedAt: 'deletedAt',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class TripHistoryEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: Number;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  cost: Number;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  distance: Number;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  duration: Number;

  @Column({
    allowNull: false,
    type: INTEGER,
  })
  id_user: Number;

  @Column({
    allowNull: false,
    type: STRING,
  })
  start_time: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  end_time: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  start_location: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  end_location: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  start_lat: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  end_lat: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  start_lng: string;

  @Column({
    allowNull: false,
    type: STRING,
  })
  end_lng: string;

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
