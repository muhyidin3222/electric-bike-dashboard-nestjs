import { Optional } from '@nestjs/common';
import { IsString, IsEmail, MaxLength, IsOptional } from 'class-validator';

export class ParamAuthDto {
  @IsString()
  @MaxLength(250)
  email: string;

  @IsString()
  @MaxLength(200)
  password: string;
}

export class ParamAuthSellerDto extends ParamAuthDto {
  @IsString()
  @MaxLength(200)
  username: string;

  @IsString()
  @MaxLength(150)
  phone: string;
}

export class ParamAuthSignupDto {
  @IsString()
  @MaxLength(250)
  email: string;

  @IsString()
  @MaxLength(200)
  password: string;

  @IsString()
  @MaxLength(200)
  username: string;
}

export class ParamSendWaDto {
  @IsString()
  @MaxLength(200)
  mobile_number: string;

  @IsString()
  @Optional()
  @MaxLength(200)
  typeSend: string;
}

export class ParamValidationWaDto {
  @IsString()
  @MaxLength(200)
  mobile_number: string;

  @IsString()
  @MaxLength(6)
  otp: number;
}
