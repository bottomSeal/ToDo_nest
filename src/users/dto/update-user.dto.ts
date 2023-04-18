import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

export class UpdateToDoDto extends PartialType(CreateUserDto) {}