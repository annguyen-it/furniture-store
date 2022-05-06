import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainViewComponent } from './admin-main-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminMainViewComponent],
  exports: [AdminMainViewComponent],
})
export class AdminMainViewModule {}
