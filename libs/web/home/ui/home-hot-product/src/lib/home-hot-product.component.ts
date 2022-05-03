import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-home-hot-product',
  templateUrl: './home-hot-product.component.html',
  styleUrls: ['./home-hot-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHotProductComponent {
  /** PUBLIC PROPERTIES */
  public activeTabIndex = 0;
  public readonly latestProducts = new Array(8).fill({
    name: 'Wooden Starburst Wall Clock-Non',
    images: [
      'https://rubiktheme.com/demo/rb_davici_demo/36-home_default/modern-swivel-accent-chair.jpg',
      'https://rubiktheme.com/demo/rb_davici_demo/37-home_default/modern-swivel-accent-chair.jpg',
    ],
    url: '',
    price: 29.0,
    rating: 3.5,
  });
  public readonly topRating = new Array(8).fill({
    name: 'Wooden Starburst Wall Clock-Non',
    images: [
      'https://rubiktheme.com/demo/rb_davici_demo/48-home_default/wooden-starburst-wall-clock-non.jpg',
      'https://rubiktheme.com/demo/rb_davici_demo/49-home_default/wooden-starburst-wall-clock-non.jpg',
    ],
    url: '',
    price: 29.0,
    rating: 3.5,
  });
  public readonly bestSellers = new Array(8).fill({
    name: 'Wooden Starburst Wall Clock-Non',
    images: [
      'https://rubiktheme.com/demo/rb_davici_demo/54-home_default/modern-sofa-couch-with-wood.jpg',
      'https://rubiktheme.com/demo/rb_davici_demo/55-home_default/modern-sofa-couch-with-wood.jpg',
    ],
    url: '',
    price: 29.0,
    rating: 3.5,
  });
}
