import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BaseService } from './base/base.service';
import { PrismaBaseRepository } from './base/base.repository';
import { BaseController } from './base/base.controller';

@Module({
    imports: [PrismaModule],
    providers: [BaseController, PrismaBaseRepository, BaseService],
    exports: [BaseController, BaseService, PrismaBaseRepository],
})
export class CoreModule {}
