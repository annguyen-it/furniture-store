import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHotProductComponent } from './home-hot-product.component';
import { ProductCardModule } from '@furniture-store/web/shared/ui/product-card';
import { TuiTabsModule } from '@taiga-ui/kit';

const TAIGA_UI = [TuiTabsModule];

@NgModule({
  imports: [CommonModule, ProductCardModule, ...TAIGA_UI],
  declarations: [HomeHotProductComponent],
  exports: [HomeHotProductComponent],
})
export class HomeHotProductModule {}
