import { Module } from '@nestjs/common';
import { ApiAccountFeatureController } from './api-account-feature.controller';

@Module({
  controllers: [ApiAccountFeatureController],
  providers: [],
  exports: [],
})
export class ApiAccountFeatureModule {}
