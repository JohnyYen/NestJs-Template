import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaBaseRepository } from './base/base.repository';
import { BaseController } from './base/base.controller';

@Module({
    imports: [PrismaModule],
    providers: [BaseController, PrismaBaseRepository],
    exports: [BaseController, PrismaBaseRepository],
})
export class CoreModule {}
