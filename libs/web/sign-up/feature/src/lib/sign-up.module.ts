import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiCheckboxLabeledModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';

const TAIGA_UI = [
  TuiInputModule,
  TuiInputPasswordModule,
  TuiCheckboxLabeledModule,
  TuiButtonModule,
  TuiLinkModule,
  TuiErrorModule,
  TuiFieldErrorPipeModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SignUpComponent }]),
    ...TAIGA_UI,
  ],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
