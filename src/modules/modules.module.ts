import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [AuthModule, SharedModule, UserModule, CoreModule],
})
export class ModulesModule {}
