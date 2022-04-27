import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import {
  TuiButtonModule,
  TuiDropdownControllerModule,
  TuiGroupModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiDropdownHoverModule, TuiInputModule } from '@taiga-ui/kit';

const TAIGA_UI = [
  TuiGroupModule,
  TuiInputModule,
  TuiButtonModule,
  TuiTextfieldControllerModule,
  TuiHostedDropdownModule,
  TuiDropdownHoverModule,
  TuiLinkModule,
  TuiDropdownControllerModule,
];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ...TAIGA_UI],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavBarModule {}
