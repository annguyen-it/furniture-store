import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'fs-home-story',
  templateUrl: './home-story.component.html',
  styleUrls: ['./home-story.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'fs-primary',
      size: 'm',
      shape: 'rounded',
    }),
  ],
})
export class HomeStoryComponent {}
