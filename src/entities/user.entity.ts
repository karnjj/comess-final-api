import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class User extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: String;

  @Column
  score: number;

  @Column
  roomId: Number;
}
