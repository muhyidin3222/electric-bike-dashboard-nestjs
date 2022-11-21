import { AuthEntity } from 'src/auth/auths.entity';
import { UserEntity } from 'src/user/user.entity';
import { VehicleInfoEntity } from 'src/vehicle_info/vehicle_info.entity';
import { OemEntity } from 'src/oem/oem.entity';
import { AdminEntity } from 'src/admin/admin.entity';
import { CallbackEntity } from 'src/callback/callback.entity';

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
export {
  user_provider,
  auths_provider,
  admin_provider,
  vehicle_info_provider,
  oem_provider,
  callback_provider
};
