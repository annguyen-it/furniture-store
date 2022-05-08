import { Injectable } from '@angular/core';
import { CreateAccountDto } from '@furniture-store/shared/data-access';
import { AccountService } from '@furniture-store/web/shared/data-access/furniture-store-api';
import {
  AccountModel,
  GenericState,
} from '@furniture-store/web/shared/data-access/models';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';

type SignUpState = GenericState<AccountModel>;

@Injectable()
export class SignUpStore extends ComponentStore<SignUpState> {
  public readonly data$ = this.select((s) => s.data);
  public readonly status$ = this.select((s) => s.status);
  public readonly error$ = this.select((s) => s.error);

  public signUp = this.effect<CreateAccountDto>((params$) =>
    params$.pipe(
      tap(() => this.patchState({ status: 'loading', error: null })),
      switchMap((dto) =>
        this.accountService.signUp(dto).pipe(
          tapResponse(
            (data) => {
              this.patchState({ data, status: 'success', error: '' });
            },
            (error) =>
              this.patchState({ status: 'error', error: error as string })
          )
        )
      )
    )
  );

  constructor(private readonly accountService: AccountService) {
    super(<SignUpState>{ data: {} });
  }
}
