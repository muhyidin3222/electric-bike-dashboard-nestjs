import { literal } from 'sequelize';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
const { INTEGER, DATE } = DataType;

@Table({
  tableName: 'driving_scoring',
  paranoid: true,
  deletedAt: 'deletedAt',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class DrivingScoringEntity extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  })
  id: string;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  hard_breaking_event: Number;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  hard_acceleration_event: Number;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  hard_left_turn_event: Number;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  hard_right_turn_event: Number;

  @Column({
    allowNull: true,
    type: INTEGER,
  })
  speeding_event: Number;

  @Column({
    allowNull: true,
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
