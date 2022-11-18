import { Module } from '@nestjs/common';
import { oem_provider } from 'src/common/provider/master-provider-model';
import { OemController } from './oem.controller';
import { OemService } from './oem.service';

@Module({
  imports: [],
  providers: [OemService, oem_provider],
  exports: [OemService],
  controllers: [OemController],
})
export class OemModule {}