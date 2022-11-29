import { IsString, IsOptional, IsNumber, IsInt, IsIn } from 'class-validator';
import {
  GetParamMasterDto,
  UpdateParamMasterDto,
} from 'src/common/dto/master.dto';

class dataVehicleInfo {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  color: string;

  @IsString()
  image: string;

  @IsInt()
  @IsOptional()
  id_oem: number;
}

export class ParamGet extends GetParamMasterDto {}
export class ParamCreate extends dataVehicleInfo {}
export class ParamUpdate extends dataVehicleInfo {
  @IsNumber()
  id: number;
}
export class ParamDelete extends UpdateParamMasterDto {}
