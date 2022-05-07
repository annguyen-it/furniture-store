import { ApiAccountDataAccessModule } from '@furniture-store/api/account/data-access';
import { Module } from '@nestjs/common';
import { ApiAccountFeatureController } from './api-account-feature.controller';

@Module({
  imports: [ApiAccountDataAccessModule],
  controllers: [ApiAccountFeatureController],
  providers: [],
  exports: [],
})
export class ApiAccountFeatureModule {}
