import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHotProductComponent } from './home-hot-product.component';
import { HomeBestSellerComponent } from './home-best-seller.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeHotProductComponent, HomeBestSellerComponent],
  exports: [HomeHotProductComponent, HomeBestSellerComponent],
})
export class HomeHotProductModule {}
