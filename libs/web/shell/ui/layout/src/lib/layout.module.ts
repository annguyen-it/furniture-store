import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavBarModule } from '@furniture-store/web/shell/ui/nav-bar';
import { MainViewModule } from '@furniture-store/web/shell/ui/main-view';
import { FooterModule } from '@furniture-store/web/shell/ui/footer';

@NgModule({
  imports: [CommonModule, NavBarModule, MainViewModule, FooterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
