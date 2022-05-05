import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavBarComponent } from './admin-nav-bar.component';
import {
  TuiButtonModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';

const TAIGA_UI = [
  TuiLinkModule,
  TuiInputModule,
  TuiTextfieldControllerModule,
  TuiButtonModule,
];

@NgModule({
  imports: [CommonModule, FormsModule, ...TAIGA_UI],
  declarations: [AdminNavBarComponent],
  exports: [AdminNavBarComponent],
})
export class AdminNavBarModule {}
