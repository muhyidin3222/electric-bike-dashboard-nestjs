import { AuthEntity } from 'src/auth/auths.entity';
import { UserEntity } from 'src/user/user.entity';
import { VehicleInfoEntity } from 'src/vehicle_info/vehicle_info.entity';
import { OemEntity } from 'src/oem/oem.entity';
import { AdminEntity } from 'src/admin/admin.entity';
import { CallbackEntity } from 'src/callback/callback.entity';
import { AerisDataEntity } from 'src/callback/aeris-data.entity';
import { LogPageVisitedEntity } from 'src/data_log/log-page-visited.entity';
import { LogApiCallEntity } from 'src/data_log/log-api-call.entity';

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
};
