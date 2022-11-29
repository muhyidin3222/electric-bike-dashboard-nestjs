import { Sequelize } from 'sequelize-typescript';
import { AdminEntity } from 'src/admin/admin.entity';
import { AerisDataEntity } from 'src/callback/aeris-data.entity';
import { CallbackEntity } from 'src/callback/callback.entity';
import { ConfigService } from 'src/common/library/config.service';
import { LogApiCallEntity } from 'src/data_log/log-api-call.entity';
import { LogPageVisitedEntity } from 'src/data_log/log-page-visited.entity';
import { DrivingScoringEntity } from 'src/driving_scoring/driving_scoring.entity';
import { NotificationEntity } from 'src/notification/notification.entity';
import { OemEntity } from 'src/oem/oem.entity';
import { TripHistoryEntity } from 'src/trip_history/trip_history.entity';
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
        CallbackEntity,
        AerisDataEntity,
        LogPageVisitedEntity,
        LogApiCallEntity,
        DrivingScoringEntity,
        TripHistoryEntity,
        NotificationEntity
      ]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
