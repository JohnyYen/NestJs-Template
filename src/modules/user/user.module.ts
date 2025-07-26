import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CoreModule } from 'src/core/core.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [CoreModule, PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
