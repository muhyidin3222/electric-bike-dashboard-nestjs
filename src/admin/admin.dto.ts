import { IsString, IsOptional, IsNumber, IsInt } from 'class-validator';
import {
  GetParamMasterDto,
  UpdateParamMasterDto,
} from 'src/common/dto/master.dto';

class dataAdmin {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  type_admin: string;

  @IsOptional()
  @IsInt()
  id_oem: number;
}

export class ParamGet extends GetParamMasterDto {}
export class ParamCreate extends dataAdmin {}
export class ParamUpdate extends dataAdmin {
  @IsNumber()
  id: number;
}
export class ParamDelete extends UpdateParamMasterDto {}
