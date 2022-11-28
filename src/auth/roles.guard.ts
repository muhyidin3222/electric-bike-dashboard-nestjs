import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadGatewayException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { dataConstants } from './constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const masterAdmin = roles?.find(
      (val) => val === dataConstants.master_admin,
    );
    const omeAdmin = roles?.find((val) => val === dataConstants.oem_admin);
    const omeMasterAdmin = roles?.find(
      (val) => val === dataConstants.oem_master_admin,
    );
    const userRole = roles?.find((val) => val === dataConstants.user);

    if (masterAdmin && user?.type_admin === dataConstants.master_admin) {
      return true;
    }

    if (omeAdmin && user?.type_admin === dataConstants.oem_admin) {
      return true;
    }

    if (omeMasterAdmin && user?.type_admin === dataConstants.oem_master_admin) {
      return true;
    }

    if (userRole && user?.type_admin === dataConstants.user) {
      return true;
    }

    throw new BadGatewayException('Not Have Access');
  }
}
