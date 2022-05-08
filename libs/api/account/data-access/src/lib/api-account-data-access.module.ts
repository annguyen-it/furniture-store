import { RepositoryConstant } from '@furniture-store/api/core/utils';
import { Module } from '@nestjs/common';
import { Account } from './account.entity';
import { ApiAccountDataAccessService } from './api-account-data-access.service';

@Module({
  controllers: [],
  providers: [
    ApiAccountDataAccessService,
    {
      provide: RepositoryConstant.ACCOUNT,
      useValue: Account,
    },
  ],
  exports: [ApiAccountDataAccessService],
})
export class ApiAccountDataAccessModule {}
