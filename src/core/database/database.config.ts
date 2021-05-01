import { IDatabaseConfig } from './interfaces/dbConfig.interface';

export const databaseConfig: IDatabaseConfig = {
  development: {
    dialect: 'mysql',
    host: 'mysql',
    port: 8888,
    username: 'root',
    password: '0000',
    database: 'comess',
  },
  production: {
    dialect: 'mysql',
    host: 'localhost',
    port: 8888,
    username: 'root',
    password: '0000',
    database: 'comess',
    logging: false,
  },
};
