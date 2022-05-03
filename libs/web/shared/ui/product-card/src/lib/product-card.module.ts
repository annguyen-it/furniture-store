import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiRatingModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';

const TAIGA_UI = [
  TuiLinkModule,
  TuiMoneyModule,
  TuiRatingModule,
  TuiButtonModule,
];

@NgModule({
  imports: [CommonModule, FormsModule, ...TAIGA_UI],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
