import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-home-media',
  templateUrl: './home-media.component.html',
  styleUrls: ['./home-media.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMediaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
