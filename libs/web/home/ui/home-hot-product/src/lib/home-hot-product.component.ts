import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-home-hot-product',
  templateUrl: './home-hot-product.component.html',
  styleUrls: ['./home-hot-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHotProductComponent {
  public items = [{}, {}, {}, {}, {}, {}, {}, {}];
}
