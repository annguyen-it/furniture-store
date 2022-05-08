import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAccountDto } from '@furniture-store/shared/data-access';
import { AppConfig, APP_CONFIG } from '@furniture-store/web/shared/app-config';
import { AccountModel } from '@furniture-store/web/shared/data-access/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    @Inject(APP_CONFIG) private readonly appConfig: AppConfig,
    private readonly http: HttpClient
  ) {}

  public signUp(createAccountDto: CreateAccountDto): Observable<AccountModel> {
    return this.http.post<AccountModel>(
      `${this.appConfig.baseUrl}/account`,
      createAccountDto
    );
  }
}
