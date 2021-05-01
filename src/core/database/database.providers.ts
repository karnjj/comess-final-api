import { Sequelize } from 'sequelize-typescript';
import { Room } from 'src/entities/room.entity';
import { User } from 'src/entities/user.entity';
import { Problem } from 'src/entities/problem.entity';

import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize({
        ...config,
        define: {
          timestamps: false,
          charset: 'utf8mb4',
          collate: 'utf8mb4_bin',
        },
      });
      sequelize.addModels([Room, User, Problem]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
