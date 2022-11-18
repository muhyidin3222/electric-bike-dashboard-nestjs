import { Sequelize } from 'sequelize-typescript';
import { AdminEntity } from 'src/admin/admin.entity';
import { OemEntity } from 'src/oem/oem.entity';
import { UserEntity } from 'src/user/user.entity';
import { VehicleInfoEntity } from 'src/vehicle_info/vehicle_info.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        // logging: true,
        port: 3306,

        host: 'localhost',
        username: 'root',
        password: 'root',
        database: 'united_tev',

        // host: '34.128.95.31',
        // username: 'root',
        // password: 'supercourses',
        // database: 'supercourse',

        define: {
          freezeTableName: true,
          timestamps: false,
        },
      });
      sequelize.addModels([
        // AuthEntity,
        // AdminUserEntity,
        VehicleInfoEntity,
        OemEntity,
        AdminEntity,
        UserEntity
      ]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];