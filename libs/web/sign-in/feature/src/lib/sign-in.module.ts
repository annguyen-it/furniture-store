import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

const TAIGA_UI = [
  TuiInputModule,
  TuiInputPasswordModule,
  TuiLinkModule,
  TuiButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SignInComponent }]),
    ...TAIGA_UI,
  ],
  declarations: [SignInComponent],
})
export class SignInModule {}
