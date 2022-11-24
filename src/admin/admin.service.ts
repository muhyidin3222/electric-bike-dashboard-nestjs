import { Inject, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { admin_provider } from 'src/common/provider/master-provider-model';
import { OemEntity } from 'src/oem/oem.entity';
import { AdminEntity } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @Inject(admin_provider.provide)
    private adminRepository: typeof AdminEntity,
  ) {}

  async detailService(param: any): Promise<AdminEntity> {
    const resFindSeller = await this.adminRepository.findOne({
      ...param,
      attributes: ['id', 'name', 'email', 'type_admin', 'id_oem'],
      include: [
        {
          model: OemEntity,
          attributes: ['id', 'name'],
        },
      ],
    });
    return resFindSeller;
  }

  async getService(query): Promise<{ rows: AdminEntity[]; count: number }> {
    const resFindSeller = await this.adminRepository.findAndCountAll({
      ...query,
      include: [
        {
          model: OemEntity,
          attributes: ['id', 'name'],
        },
      ],
      attributes: ['id', 'name', 'email', 'type_admin', 'created_at'],
      order: [['created_at', 'DESC']],
    });
    return resFindSeller;
  }

  async deleteService(id: number): Promise<AdminEntity | any> {
    const resFindSeller = await this.adminRepository.destroy({
      where: {
        id,
      },
    });
    return resFindSeller;
  }

  async updateService(body: AdminEntity | any): Promise<AdminEntity> {
    await this.adminRepository.update(body, {
      where: {
        id: body?.id,
      },
    });
    return body;
  }

  async createService(body: AdminEntity | any): Promise<AdminEntity> {
    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, genSalt);
    const resFindSeller = await this.adminRepository.create({
      ...body,
      password: hashPassword,
    });
    return resFindSeller;
  }
}
