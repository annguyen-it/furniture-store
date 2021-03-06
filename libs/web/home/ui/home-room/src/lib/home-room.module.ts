import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoomComponent } from './home-room.component';
import { TuiButtonModule } from '@taiga-ui/core';

const TAIGA_UI = [TuiButtonModule];

@NgModule({
  imports: [CommonModule, ...TAIGA_UI],
  declarations: [HomeRoomComponent],
  exports: [HomeRoomComponent],
})
export class HomeRoomModule {}
