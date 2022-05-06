import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-admin-main-view',
  templateUrl: './admin-main-view.component.html',
  styleUrls: ['./admin-main-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMainViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
