import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavBarModule } from '@furniture-store/web/shell/ui/nav-bar';
import { MainViewModule } from '@furniture-store/web/shell/ui/main-view';
import { FooterModule } from '@furniture-store/web/shell/ui/footer';
import { ButtonScrollToTopModule } from '@furniture-store/web/shell/ui/button-scroll-to-top';

@NgModule({
  imports: [
    CommonModule,
    NavBarModule,
    MainViewModule,
    FooterModule,
    ButtonScrollToTopModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
