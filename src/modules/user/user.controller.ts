import { BaseController } from "src/core/base/base.controller";
import { UserCreateDto } from "./dto/userCreate.dto";
import { UserUpdateDto } from "./dto/userUpdate.dto";
import { User } from "@prisma/client";

export class UserController extends BaseController<User, UserCreateDto, UserUpdateDto>{}