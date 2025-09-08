import { Injectable } from '@nestjs/common';
import { PrismaBaseRepository } from 'src/core/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository extends PrismaBaseRepository<User> {
 
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
    this.prismaDelegate = this.prisma.user;
  }
}
