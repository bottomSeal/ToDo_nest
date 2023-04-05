import { PartialType } from "@nestjs/mapped-types";
import { CreateToDoDto } from "./create-todo.dto";

export class UpdateToDoDto extends PartialType(CreateToDoDto) {}