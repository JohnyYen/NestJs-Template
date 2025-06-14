import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [CommonModule, ConfigModule, PrismaModule, CoreModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
