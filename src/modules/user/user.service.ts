import { User } from "@prisma/client";
import { BaseService } from "src/core/base/base.service";
import { UserCreateDto } from "./dto/userCreate.dto";
import { UserUpdateDto } from "./dto/userUpdate.dto";

export class UserService extends BaseService<User, UserCreateDto, UserUpdateDto>{
    protected getEntityName(): string {
        return "User";
    }

}