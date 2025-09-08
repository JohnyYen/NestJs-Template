import { User } from '@prisma/client';
import { BaseService } from 'src/core/base/base.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(protected readonly repository: UserRepository) {
    super(repository);
  }

  protected getEntityName(): string {
    return 'User';
  }
}
