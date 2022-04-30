import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CollectionComponent],
  exports: [CollectionComponent],
})
export class CollectionModule {}
