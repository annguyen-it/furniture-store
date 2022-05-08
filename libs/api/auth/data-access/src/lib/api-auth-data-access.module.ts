import { Account } from '@furniture-store/api/account/data-access';
import { RepositoryConstant } from '@furniture-store/api/core/utils';
import { Module } from '@nestjs/common';
import { ApiAuthDataAccessService } from './api-auth-data-access.service';

@Module({
  controllers: [],
  providers: [
    ApiAuthDataAccessService,
    {
      provide: RepositoryConstant.ACCOUNT,
      useValue: Account,
    },
  ],
  exports: [ApiAuthDataAccessService],
})
export class ApiAuthDataAccessModule {}
