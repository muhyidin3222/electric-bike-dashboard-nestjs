import { IsString, IsOptional, IsNumber, IsInt } from 'class-validator';
import {
  GetParamMasterDto,
  UpdateParamMasterDto,
} from 'src/common/dto/master.dto';

class dataOem {
  @IsString()
  pic_name: string;

  @IsString()
  name: string;

  @IsString()
  logo: string;

  @IsString()
  pic_email: string;

  @IsString()
  pic_phone_number: string;

  @IsOptional()
  @IsString()
  website: string;

  @IsString()
  customer_service_phone_number: string;

  @IsOptional()
  @IsString()
  instagram: string;

  @IsOptional()
  @IsString()
  address: string;
}

export class ParamGet extends GetParamMasterDto {
  @IsOptional()
  @IsString()
  name: string;
}
export class ParamCreate extends dataOem {}
export class ParamUpdate {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  pic_name: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  logo: string;

  @IsOptional()
  @IsString()
  pic_email: string;

  @IsOptional()
  @IsString()
  pic_phone_number: string;

  @IsOptional()
  @IsString()
  website: string;

  @IsOptional()
  @IsString()
  customer_service_phone_number: string;

  @IsOptional()
  @IsString()
  instagram: string;

  @IsOptional()
  @IsString()
  address: string;
}
export class ParamDelete extends UpdateParamMasterDto {}
