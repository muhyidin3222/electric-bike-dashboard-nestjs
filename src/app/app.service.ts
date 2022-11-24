import { Inject, Injectable } from '@nestjs/common';
import { oem_provider } from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject(oem_provider.provide)
    private oemRepository: typeof OemEntity,
  ) {}

  main(): string {
    return 'success main api';
  }

  async homeDashboardChart(headers: any, body: any): Promise<any> {}
}
