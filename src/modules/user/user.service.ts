import { User } from '@prisma/client';
import { BaseService } from 'src/core/base/base.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  protected getEntityName(): string {
    return 'User';
  }
}
