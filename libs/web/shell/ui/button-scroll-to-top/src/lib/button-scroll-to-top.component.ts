import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-button-scroll-to-top',
  templateUrl: './button-scroll-to-top.component.html',
  styleUrls: ['./button-scroll-to-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonScrollToTopComponent {
  /** PUBLIC METHODS */
  public scrollToTop(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
