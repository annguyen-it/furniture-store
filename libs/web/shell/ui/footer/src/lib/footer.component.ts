import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public readonly shopUrls = [
    {
      name: 'Our Story',
      url: '',
    },
    {
      name: 'Visit Melbourne Studio',
      url: '',
    },
    {
      name: 'Visit Sydney Studio',
      url: '',
    },
    {
      name: 'Visit Brisbane Studio',
      url: '',
    },
    {
      name: 'Design',
      url: '',
    },
    {
      name: 'How Davici Works',
      url: '',
    },
  ];

  public readonly helpUrls = [
    {
      name: 'Contact us',
      url: '',
    },
    {
      name: 'Delivery',
      url: '',
    },
    {
      name: 'Order history',
      url: '',
    },
    {
      name: 'Visit Brisbane Studio',
      url: '',
    },
    {
      name: 'Interest Free Finance',
      url: '',
    },
    {
      name: 'Cipmoney',
      url: '',
    },
  ];

  public readonly servicesUrls = [
    {
      name: 'Assembly Guides',
      url: '',
    },
    {
      name: 'Funiture Packages & Fitouts',
      url: '',
    },
    {
      name: 'Trade Programme',
      url: '',
    },
    {
      name: 'Sale',
      url: '',
    },
    {
      name: 'New Designs',
      url: '',
    },
    {
      name: 'Gift Cards',
      url: '',
    },
  ];
  public readonly followUrls = [
    {
      name: 'Facebook',
      url: '',
    },
    {
      name: 'Twitter',
      url: '',
    },
    {
      name: 'Instagram',
      url: '',
    },
    {
      name: 'Printerest',
      url: '',
    },
  ];
}
