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
}
