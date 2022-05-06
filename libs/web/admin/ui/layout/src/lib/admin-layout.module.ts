import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminNavBarModule } from '@furniture-store/web/admin/ui/nav-bar';
import { AdminSideBarModule } from '@furniture-store/web/admin/ui/side-bar';
import { AdminMainViewModule } from '@furniture-store/web/admin/ui/main-view';

@NgModule({
  imports: [
    CommonModule,
    AdminNavBarModule,
    AdminSideBarModule,
    AdminMainViewModule,
  ],
  declarations: [AdminLayoutComponent],
})
export class AdminLayoutModule {}
