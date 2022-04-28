import { Component, Input, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageTemplateComponent {
  @Input() title: string | undefined;
  @Input() backgroundColorHex: string = '#e8e8e8';
}
