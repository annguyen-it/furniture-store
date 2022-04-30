import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBlogComponent } from './home-blog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeBlogComponent],
  exports: [HomeBlogComponent],
})
export class HomeBlogModule {}
