import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeStoryComponent } from './home-story.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeStoryComponent],
  exports: [HomeStoryComponent],
})
export class HomeStoryModule {}
