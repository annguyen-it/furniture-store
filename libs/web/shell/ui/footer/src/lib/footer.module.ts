import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TuiLinkModule } from '@taiga-ui/core';

const TAIGA_UI = [TuiLinkModule];

@NgModule({
  imports: [CommonModule, ...TAIGA_UI],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
