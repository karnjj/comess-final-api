import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { objToStr, strToObj } from 'src/utils';

@Table({ tableName: 'problem' })
export class Problem extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  answer: string;

  @Column({
    type: DataType.STRING,
    get() {
      return strToObj(this.getDataValue('choices'));
    },
    set(data: any[]) {
      this.setDataValue('choices', objToStr(data));
    },
  })
  choices: string[];
}
