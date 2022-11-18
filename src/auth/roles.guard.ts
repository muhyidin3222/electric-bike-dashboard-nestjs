import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadGatewayException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { roleConstants } from './constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const masterAdmin = roles?.find(
      (val) => val === roleConstants.master_admin,
    );
    // const omeAdmin = roles?.find((val) => val === roleConstants.oem_admin);

    console.log(roles,'roles');
    // console.log(omeAdmin, masterAdmin, user);

    if (masterAdmin) {
      return true;
    }

    // if (omeAdmin && user?.type_admin !== roleConstants.oem_admin) {
    //   throw new BadGatewayException('Not Have Access');
    // }

    return true;
  }
}
