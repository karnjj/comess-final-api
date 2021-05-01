import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { strToObj, objToStr } from '../utils';

@Table({ tableName: 'room' })
export class Room extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  nProblem: number;

  @Column({
    type: DataType.STRING,
    get() {
      return strToObj(this.getDataValue('problems'));
    },
    set(data: any[]) {
      this.setDataValue('problems', objToStr(data));
    },
  })
  problems: number[];
}
