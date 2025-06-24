import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import swaggerConfig from './config/swagger.config';
import authConfig from './config/auth.config';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, swaggerConfig, authConfig],
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService], // Exportarlo si lo usas en otros módulos
})
export class AppModule {}
