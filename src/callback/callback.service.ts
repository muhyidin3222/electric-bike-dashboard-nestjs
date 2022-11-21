import { Inject, Injectable } from '@nestjs/common';
import { callback_provider } from 'src/common/provider/master-provider-model';
import { CallbackEntity } from './callback.entity';

@Injectable()
export class CallbackService {
  constructor(
    @Inject(callback_provider.provide)
    private callbackRepository: typeof CallbackEntity,
  ) {}

  async createService(headers: any, body: any): Promise<CallbackEntity> {
    const resFindSeller = await this.callbackRepository.create({
      headers: JSON.stringify(headers),
      body: JSON.stringify(body),
    });
    return resFindSeller;
  }
}
