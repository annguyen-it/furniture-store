import { ApiAccountFeatureModule } from '@furniture-store/api/account/feature';
import { ApiCoreModule } from '@furniture-store/api/core/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiCoreModule, ApiAccountFeatureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
