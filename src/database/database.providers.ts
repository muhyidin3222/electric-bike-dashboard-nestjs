import { Sequelize } from 'sequelize-typescript';
import { AdminEntity } from 'src/admin/admin.entity';
import { CallbackEntity } from 'src/callback/callback.entity';
import { ConfigService } from 'src/common/library/config.service';
import { OemEntity } from 'src/oem/oem.entity';
import { UserEntity } from 'src/user/user.entity';
import { VehicleInfoEntity } from 'src/vehicle_info/vehicle_info.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const configService = new ConfigService();
      const HOST = configService.get('HOST');
      const USERNAME = configService.get('USERNAME');
      const PASSWORD = configService.get('PASSWORD');
      const DATABASE = configService.get('DATABASE');
      const sequelize = new Sequelize({
        dialect: 'mysql',
        logging: HOST === 'localhost' ? true : false,
        // logging: true,
        port: 3306,
        host: HOST,
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE,
        define: {
          freezeTableName: true,
          timestamps: false,
        },
      });
      sequelize.addModels([
        VehicleInfoEntity,
        OemEntity,
        AdminEntity,
        UserEntity,
        CallbackEntity
      ]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
