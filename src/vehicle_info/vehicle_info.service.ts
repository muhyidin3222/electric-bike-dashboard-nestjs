import {
  BadGatewayException,
  BadRequestException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { vehicle_info_provider } from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';
import { VehicleInfoEntity } from './vehicle_info.entity';

@Injectable()
export class VehicleInfoService {
  constructor(
    @Inject(vehicle_info_provider.provide)
    private vechicleInfoRepository: typeof VehicleInfoEntity,
  ) {}

  async detailService(param: any): Promise<VehicleInfoEntity> {
    const resFindSeller = await this.vechicleInfoRepository.findOne(param);
    return resFindSeller;
  }

  async getService(
    query,
  ): Promise<{ rows: VehicleInfoEntity[]; count: number }> {
    const resFindSeller = await this.vechicleInfoRepository.findAndCountAll({
      ...query,
      attributes: ['id', 'name', 'id_oem', 'type', 'color', 'image'],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: OemEntity,
          attributes: ['id', 'name'],
        },
      ],
    });
    return resFindSeller;
  }

  async deleteService({ where }): Promise<VehicleInfoEntity | any> {
    const resFindSeller = await this.vechicleInfoRepository.destroy({
      where: where,
    });
    return resFindSeller;
  }

  async updateService(
    body: VehicleInfoEntity | any,
  ): Promise<VehicleInfoEntity> {
    await this.vechicleInfoRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(
    body: VehicleInfoEntity | any,
  ): Promise<VehicleInfoEntity> {
    const resFindSeller = await this.vechicleInfoRepository.create(body);
    return resFindSeller;
  }

  async checkAccess(id: number, id_user: string): Promise<void> {
    const getDetail: VehicleInfoEntity = await this.detailService({
      where: {
        id,
      },
      attributes: ['id_seller'],
    });
    // if (getDetail && getDetail?.id_seller !== id_user) {
    //   throw new BadRequestException('not have access');
    // }
  }
}
