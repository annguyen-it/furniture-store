import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'fs-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'fs-primary-white',
      size: 's',
      shape: 'square',
    }),
  ],
})
export class ProductCardComponent {
  // TODO: Remove any
  @Input() item!: any;
}
