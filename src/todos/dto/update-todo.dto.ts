import { PartialType } from "@nestjs/mapped-types";
import { CreateToDoDTO } from "./create-todo.dto";
import { IsBoolean } from "class-validator";

export class UpdateToDoDTO extends PartialType(CreateToDoDTO) {
    @IsBoolean()
    readonly isCompleted: Boolean;
}