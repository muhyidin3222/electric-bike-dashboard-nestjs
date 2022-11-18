import { IsString, IsOptional, IsNumber, IsInt } from 'class-validator';
import { GetParamMasterDto } from 'src/common/dto/master.dto';

class dataUser {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsString()
  vin: string;

  @IsString()
  imei: string;

  @IsOptional()
  @IsString()
  odometer: string;

  @IsOptional()
  @IsInt()
  id_oem: string;
}

export class ParamCreate extends dataUser {}
export class ParamUpdate extends dataUser {
  @IsNumber()
  id: number;
}
export class ParamGet extends GetParamMasterDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  vin: string;

  @IsOptional()
  @IsString()
  imei: string;

  @IsOptional()
  @IsString()
  odometer: string;

  @IsOptional()
  @IsInt()
  id_oem: number;

  @IsOptional()
  @IsString()
  last_activities: string;

  @IsOptional()
  @IsString()
  last_login: string;
}
