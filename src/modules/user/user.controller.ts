import { BaseController } from 'src/core/base/base.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import {Controller} from "@nestjs/common"

@ApiTags("User")
@Controller("user")
export class UserController extends BaseController<
  User,
  CreateUserDto,
  UpdateUserDto
> {}
