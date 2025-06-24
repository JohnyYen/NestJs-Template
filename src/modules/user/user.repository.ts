import { PrismaBaseRepository } from 'src/core/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

export class UserRepository extends PrismaBaseRepository<User> {
  protected override prismaDelegate = this.prisma.user;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
