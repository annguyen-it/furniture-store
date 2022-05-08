import { ApiAccountFeatureModule } from '@furniture-store/api/account/feature';
import { ApiAuthFeatureModule } from '@furniture-store/api/auth/feature';
import { ApiCoreModule } from '@furniture-store/api/core/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiCoreModule, ApiAccountFeatureModule, ApiAuthFeatureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
