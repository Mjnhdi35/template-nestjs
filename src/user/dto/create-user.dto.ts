import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  @IsString()
  email: string

  @MinLength(6)
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  username: string
}
