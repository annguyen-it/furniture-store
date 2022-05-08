import { Provider } from '@angular/core';
import { TUI_SANITIZER } from '@taiga-ui/cdk';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

const taigaUiProvider: Provider = [
  {
    provide: TUI_SANITIZER,
    useClass: NgDompurifySanitizer,
  },
  {
    provide: TUI_VALIDATION_ERRORS,
    useValue: {
      required: 'This field cannot be empty',
      minlength: (context: { requiredLength: string }): string =>
        `This field must have at least ${context.requiredLength} character${
          context.requiredLength === '1' ? '' : 's'
        }`,
    },
  },
];

export const appProvider = [...taigaUiProvider];
