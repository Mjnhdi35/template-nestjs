import { IsOptional, IsEmail, MinLength, IsString } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  @IsString()
  email?: string

  @IsOptional()
  @MinLength(6)
  @IsString()
  password?: string

  @IsOptional()
  @IsString()
  username?: string
}
