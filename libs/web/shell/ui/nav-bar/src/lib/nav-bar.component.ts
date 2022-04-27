import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'fs-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'fs-flat',
      size: 'm',
    }),
  ],
})
export class NavBarComponent {
  /** PUBLIC PROPERTIES */
  public searchValue = '';
  public readonly shopUrls = [
    {
      title: 'Shop',
      urls: [
        {
          name: 'Bed & Bath',
          url: '',
        },
        {
          name: 'Coffee Tables',
          url: '',
        },
        {
          name: 'Outdoor',
          url: '',
        },
        {
          name: 'Side Tables',
          url: '',
        },
        {
          name: 'Storage',
          url: '',
        },
      ],
    },
    {
      title: 'Accessories',
      urls: [
        {
          name: 'Bar Cabinets',
          url: '',
        },
        {
          name: 'Coffee Tables',
          url: '',
        },
        {
          name: 'Side Tables',
          url: '',
        },
        {
          name: 'Table',
          url: '',
        },
        {
          name: 'Wall Lamp',
          url: '',
        },
      ],
    },
    {
      title: 'Home',
      urls: [
        {
          name: 'Accessories',
          url: '',
        },
        {
          name: 'Art',
          url: '',
        },
        {
          name: 'Decor & Pillows',
          url: '',
        },
        {
          name: 'Furniture',
          url: '',
        },
        {
          name: 'Lighting',
          url: '',
        },
      ],
    },
    {
      title: 'For autumn',
      urls: [
        {
          name: 'Art',
          url: '',
        },
        {
          name: 'Bar Cabinets',
          url: '',
        },
        {
          name: 'Decor & Pillows',
          url: '',
        },
        {
          name: 'Lighting',
          url: '',
        },
        {
          name: 'Outdoor',
          url: '',
        },
      ],
    },
  ];
  public readonly pageUrls = [
    {
      name: 'About us',
      url: '',
    },
    {
      name: 'Delivery',
      url: '',
    },
    {
      name: 'Legal Notice',
      url: '',
    },
    {
      name: 'Secure payment',
      url: '',
    },
    {
      name: 'Terms and conditions of use',
      url: '',
    },
  ];
}
