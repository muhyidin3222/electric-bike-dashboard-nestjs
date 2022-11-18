import { BeforeCreate, BeforeUpdate, Column, CreatedAt, DeletedAt, Model, UpdatedAt } from 'sequelize-typescript';
import { INTEGER } from 'sequelize';

export class EntityMaster {
  @Column({
    field: 'created_at',
    type: INTEGER,
  })
  created_at: Number;

  @Column({
    field: 'updated_at',
    type: INTEGER,
  })
  updated_at: Number;

  @Column({
    field: 'deleted_at',
    type: INTEGER,
  })
  deleted_at: Number;

  @BeforeCreate
  createDates() {
    this.created_at = Date.now()
    this.updated_at = Date.now()
  }

  @BeforeUpdate
  updateDates() {
    this.updated_at = Date.now()
  }
}
