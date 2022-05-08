import { ApiAuthDataAccessModule } from '@furniture-store/api/auth/data-access';
import { Module } from '@nestjs/common';
import { ApiAuthFeatureController } from './api-auth-feature.controller';

@Module({
  imports: [ApiAuthDataAccessModule],
  controllers: [ApiAuthFeatureController],
  providers: [],
  exports: [],
})
export class ApiAuthFeatureModule {}
