import { Account } from '@furniture-store/api/account/data-access';
import { RepositoryConstant } from '@furniture-store/api/core/utils';
import { LoginAccountDto } from '@furniture-store/shared/data-access';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ApiAuthDataAccessService {
  constructor(
    @Inject(RepositoryConstant.ACCOUNT)
    private readonly accountRepository: typeof Account
  ) {}

  public findOne(loginAccountDto: LoginAccountDto) {
    return this.accountRepository.findOne({
      where: {
        username: loginAccountDto.username,
        password: loginAccountDto.password,
      },
      attributes: {
        exclude: ['password']
      }
    });
  }
}
