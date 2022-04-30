import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonScrollToTopComponent } from './button-scroll-to-top.component';
import { TuiButtonModule } from '@taiga-ui/core';

const TAIGA_UI = [TuiButtonModule];

@NgModule({
  imports: [CommonModule, ...TAIGA_UI],
  declarations: [ButtonScrollToTopComponent],
  exports: [ButtonScrollToTopComponent],
})
export class ButtonScrollToTopModule {}
