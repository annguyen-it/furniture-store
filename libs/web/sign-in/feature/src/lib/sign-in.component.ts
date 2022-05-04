import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'fs-primary',
      size: 'm',
      shape: null,
    }),
  ],
})
export class SignInComponent {
  /** PUBLIC PROPERTIES */
  public form!: FormGroup;

  /** CONSTRUCTOR */
  constructor(private readonly fb: FormBuilder) {
    this.initForm();
  }

  /** PRIVATE METHODS */
  private initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
