import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHotProductComponent } from './home-hot-product.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeHotProductComponent, ],
  exports: [HomeHotProductComponent],
})
export class HomeHotProductModule {}
