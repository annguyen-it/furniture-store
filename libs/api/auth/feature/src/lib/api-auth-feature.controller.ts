import { ApiAuthDataAccessService } from '@furniture-store/api/auth/data-access';
import { LoginAccountDto } from '@furniture-store/shared/data-access';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class ApiAuthFeatureController {
  constructor(private readonly authService: ApiAuthDataAccessService) {}

  @Post()
  login(@Body() loginAccountDto: LoginAccountDto){
    return this.authService.findOne(loginAccountDto);
  }
}
