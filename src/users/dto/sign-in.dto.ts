import { IsString, MinLength } from "class-validator";

export class SignInUserDto {
    @IsString()
    readonly username: string;

    @IsString()
    @MinLength(8)   
    readonly password: string;
}