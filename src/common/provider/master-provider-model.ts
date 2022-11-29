import { AuthEntity } from 'src/auth/auths.entity';
import { UserEntity } from 'src/user/user.entity';
import { VehicleInfoEntity } from 'src/vehicle_info/vehicle_info.entity';
import { OemEntity } from 'src/oem/oem.entity';
import { AdminEntity } from 'src/admin/admin.entity';
import { CallbackEntity } from 'src/callback/callback.entity';
import { AerisDataEntity } from 'src/callback/aeris-data.entity';
import { LogPageVisitedEntity } from 'src/data_log/log-page-visited.entity';
import { LogApiCallEntity } from 'src/data_log/log-api-call.entity';
import { DrivingScoringEntity } from 'src/driving_scoring/driving_scoring.entity';
import { TripHistoryEntity } from 'src/trip_history/trip_history.entity';
import { NotificationEntity } from 'src/notification/notification.entity';

const user_provider = {
  provide: 'USER_REPOSITORY',
  useValue: UserEntity,
};
const auths_provider = {
  provide: 'AUTH_REPOSITORY',
  useValue: AuthEntity,
};
const admin_provider = {
  provide: 'ADMIN_USER_REPOSITORY',
  useValue: AdminEntity,
};
const vehicle_info_provider = {
  provide: 'VEHICLE_INFO_REPOSITORY',
  useValue: VehicleInfoEntity,
};
const oem_provider = {
  provide: 'OEM_REPOSITORY',
  useValue: OemEntity,
};
const callback_provider = {
  provide: 'CALLBACKK_REPOSITORY',
  useValue: CallbackEntity,
};
const aeris_data_provider = {
  provide: 'AERIS_DATA_REPOSITORY',
  useValue: AerisDataEntity,
};
const log_page_visited_data_provider = {
  provide: 'LOG_PAGE_VISITED_REPOSITORY',
  useValue: LogPageVisitedEntity,
};
const log_api_call_provider = {
  provide: 'LOG_API_CALL_REPOSITORY',
  useValue: LogApiCallEntity,
};
const driving_scoring_provider = {
  provide: 'DRIVING_SCORING_REPOSITORY',
  useValue: DrivingScoringEntity,
};
const trip_history_provider = {
  provide: 'TRIP_HISTORY_REPOSITORY',
  useValue: TripHistoryEntity,
};
const notification_provider = {
  provide: 'NOTIFICATION_REPOSITORY',
  useValue: NotificationEntity,
};
export {
  user_provider,
  auths_provider,
  admin_provider,
  vehicle_info_provider,
  oem_provider,
  callback_provider,
  aeris_data_provider,
  log_page_visited_data_provider,
  log_api_call_provider,
  driving_scoring_provider,
  trip_history_provider,
  notification_provider
};
