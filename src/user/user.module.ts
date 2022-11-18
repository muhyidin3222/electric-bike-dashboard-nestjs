import { Module } from '@nestjs/common';
import { user_provider } from 'src/common/provider/master-provider-model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserService, user_provider],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}