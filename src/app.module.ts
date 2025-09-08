import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule, // Importar ConfigModule para que esté disponible globalmente
    ModulesModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService], // Exportarlo si lo usas en otros módulos
})
export class AppModule {}
