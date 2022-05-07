import { Inject, Injectable } from '@nestjs/common';
import { RepositoryConstant } from '@furniture-store/api/core/utils';
import { CreateAccountDto } from '@furniture-store/shared/data-access';
import { Account } from './account.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ApiAccountDataAccessService {
  constructor(
    @Inject(RepositoryConstant.ACCOUNT)
    private readonly accountRepository: typeof Account
  ) {}

  public create(createAccountDto: CreateAccountDto) {
    return this.accountRepository.create({
      ...createAccountDto,
      createdAt: Sequelize.fn('GETDATE'),
    });
  }

  public findAll(role: number) {
    return this.accountRepository.findAll({
      where: { role },
    });
  }
}
