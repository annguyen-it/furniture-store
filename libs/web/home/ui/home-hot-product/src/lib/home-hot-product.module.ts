import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHotProductComponent } from './home-hot-product.component';
import { ProductCardModule } from '@furniture-store/web/shared/ui/product-card';

@NgModule({
  imports: [CommonModule, ProductCardModule],
  declarations: [HomeHotProductComponent],
  exports: [HomeHotProductComponent],
})
export class HomeHotProductModule {}
