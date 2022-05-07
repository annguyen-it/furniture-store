import { ApiAccountDataAccessService } from '@furniture-store/api/account/data-access';
import { CreateAccountDto } from '@furniture-store/shared/data-access';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('account')
export class ApiAccountFeatureController {
  constructor(private readonly accountService: ApiAccountDataAccessService) {}

  @Get()
  getAccounts() {
    return this.accountService.findAll(0);
  }

  @Post()
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  /** ADMIN */
  @Get('admin')
  getAdmin() {
    return this.accountService.findAll(1);
  }
}
