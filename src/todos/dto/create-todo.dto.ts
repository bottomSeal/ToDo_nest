import { IsString,  IsDate, IsOptional } from "class-validator";

export class CreateToDoDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsOptional()
    @IsDate()
    readonly dueDate?: Date;
}