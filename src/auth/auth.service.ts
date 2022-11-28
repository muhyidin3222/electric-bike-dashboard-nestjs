import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { newId } from 'src/common/library/create-last-id.service';
import { AdminEntity } from 'src/admin/admin.entity';
import {
  admin_provider,
  user_provider,
} from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';
import { UserEntity } from 'src/user/user.entity';
import { dataConstants, roleConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(admin_provider.provide)
    private adminUserRepository: typeof AdminEntity,
    @Inject(user_provider.provide)
    private userRepository: typeof UserEntity,
    private jwtService: JwtService,
  ) {}

  async loginService(userParamBody): Promise<any> {
    const { email, password } = userParamBody;
    // const genSalt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(password, genSalt);
    const dataResponse: any = await this.adminUserRepository.findOne({
      where: {
        email,
      },
      attributes: ['id', 'email', 'password', 'name', 'type_admin', 'id_oem'],
    });
    const userData = dataResponse?.dataValues;
    if (!userData) throw new BadRequestException('Email Not Found');
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) throw new BadRequestException('Password Salah');
    const payload = {
      id: userData.id,
      sub: userData.id,
      type_admin: userData.type_admin,
      id_oem: userData?.id_oem,
    };
    const user_token = this.jwtService.sign(payload);
    return {
      id: userData.id,
      user_token,
      email: userData.email,
      name: userData.name,
      type_admin: userData.type_admin,
    };
  }

  async loginCustomerService(userParamBody): Promise<any> {
    const { email, password } = userParamBody;
    const dataResponse: any = await this.userRepository.findOne({
      where: {
        email,
      },
      attributes: ['id', 'email', 'password'],
    });
    const userData = dataResponse?.dataValues;
    if (!userData) throw new BadRequestException('Email Not Found');
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) throw new BadRequestException('Password Salah');
    const payload = {
      id: userData.id,
      sub: userData.id,
      type_admin: dataConstants.user,
    };
    const user_token = this.jwtService.sign(payload);
    return {
      id: userData.id,
      user_token,
      email: userData.email,
    };
  }

  async registrationService(userParamBody): Promise<any> {
    const { email, password } = userParamBody;

    try {
      const userData = await this.adminUserRepository.count({
        where: {
          email,
        },
      });

      if (userData)
        throw new BadRequestException('Email Sudah Pernah Digunakan');

      const isMatch = await bcrypt.compare(password, password);
      const genSalt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, genSalt);

      if (!isMatch) throw new BadRequestException('Password Salah');

      const resCreated = await this.adminUserRepository.create({
        email,
        password: hashPassword,
      });
      return resCreated;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
