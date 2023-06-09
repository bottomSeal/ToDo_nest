import { IsString, IsEmail, MinLength } from "class-validator";

export class SignUpUserDto {
    @IsString()
    readonly username: string;

    @IsString()
    @MinLength(8)
    readonly password: string;

    @IsEmail()
    readonly email: string;
}