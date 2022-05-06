import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSideBarComponent } from './admin-side-bar.component';
import { RouterModule } from '@angular/router';
import {
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiScrollbarModule,
  TuiSvgModule,
} from '@taiga-ui/core';

const TAIGA_UI = [
  TuiHostedDropdownModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiButtonModule,
  TuiLinkModule,
];

@NgModule({
  imports: [CommonModule, RouterModule, ...TAIGA_UI],
  declarations: [AdminSideBarComponent],
  exports: [AdminSideBarComponent],
})
export class AdminSideBarModule {}
