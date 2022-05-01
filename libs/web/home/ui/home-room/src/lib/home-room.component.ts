import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'fs-home-room',
  templateUrl: './home-room.component.html',
  styleUrls: ['./home-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'fs-primary',
      size: 'm',
      shape: 'rounded',
    }),
  ],
})
export class HomeRoomComponent {
  /** PUBLIC PROPERTIES */
  public readonly sectionsData = [
    {
      imgUrl:
        'https://cdn.shopify.com/s/files/1/0550/8336/8541/files/banner1-h1.jpg?v=1636000484',
      title: 'Living room',
      subTitle: '30% off all order',
      url: '',
    },
    {
      imgUrl:
        'https://cdn.shopify.com/s/files/1/0550/8336/8541/files/banner2-h1.jpg?v=1636000484',
      title: 'Dining room',
      subTitle: '30% off all order',
      url: '',
    },
  ];
}
