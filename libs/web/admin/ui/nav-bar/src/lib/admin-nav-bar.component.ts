import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'fs-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiButtonOptionsProvider({
      appearance: 'fs-flat',
      size: 'm',
      shape: null,
    }),
  ],
})
export class AdminNavBarComponent {
  /** PUBLIC PROPERTIES */
  public searchValue = '';
  public isSearchingMobile = false;

  /** PUBLIC METHODS */
  public toggleSearchMobile(open: boolean): void {
    this.isSearchingMobile = open;
  }
}
