import { Component, OnInit } from '@angular/core';
// animations
import { slideUpAnimation } from '../../animations';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
  animations: [slideUpAnimation],
})
export class PageTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
