import { BaseController } from 'src/core/base/base.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

export class UserController extends BaseController<
  User,
  CreateUserDto,
  UpdateUserDto
> {}
