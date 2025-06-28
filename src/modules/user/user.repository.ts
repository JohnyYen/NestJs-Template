import { PrismaBaseRepository } from 'src/core/base/base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

export class UserRepository extends PrismaBaseRepository<User> {
  protected override prismaDelegate;

  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
    this.prismaDelegate;
  }
}
