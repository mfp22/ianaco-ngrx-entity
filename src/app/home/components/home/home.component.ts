import { Component, OnInit } from '@angular/core';
// animations
import { slideInAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInAnimation],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
