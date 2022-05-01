import { Module } from '@nestjs/common';
import { ApiAuthFeatureController } from './api-auth-feature.controller';

@Module({
  controllers: [ApiAuthFeatureController],
  providers: [],
  exports: [],
})
export class ApiAuthFeatureModule {}
