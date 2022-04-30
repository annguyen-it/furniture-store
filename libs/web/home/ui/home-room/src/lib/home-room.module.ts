import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoomComponent } from './home-room.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeRoomComponent],
  exports: [HomeRoomComponent],
})
export class HomeRoomModule {}
