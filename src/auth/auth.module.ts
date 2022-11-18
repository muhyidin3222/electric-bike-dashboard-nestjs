import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { ConfigModule } from '../common/library/config.module';
import { RolesGuard } from './roles.guard';
import {
  admin_provider,
  auths_provider,
  user_provider,
} from 'src/common/provider/master-provider-model';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '14d' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    RolesGuard,
    user_provider,
    auths_provider,
    admin_provider
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
