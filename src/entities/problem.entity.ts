import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'problem' })
export class Problem extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  answer: string;
}
