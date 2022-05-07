import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  modelName: 'StoreAccount',
})
export class Account extends Model {
  /** COLUMNS */
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  uuid: string;

  @Column(DataType.STRING)
  username: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.INTEGER)
  role: number;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @AllowNull
  @Column(DataType.STRING)
  email: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date;
}
