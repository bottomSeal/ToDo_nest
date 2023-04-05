import { IsString,  IsDate, IsOptional } from "class-validator";

export class CreateToDoDTO {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsOptional()
    @IsDate()
    readonly dueDate: Date;
}