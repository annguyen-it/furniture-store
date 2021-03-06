import { Account } from '@furniture-store/api/account/data-access';
import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

export const databaseProvider: Provider[] = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        dialectOptions: { timezone: '+07:00' },
        host: process.env.DATABASE_HOST,
        port: 1433,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: 'FurnitureStore',
        define: {
          freezeTableName: true,
          createdAt: false,
          updatedAt: false,
        },
      });

      sequelize.addModels([Account]);

      // await sequelize.sync();
      return sequelize;
    },
  },
];
