import { Component, Input, ViewEncapsulation } from '@angular/core';
// models
import { color } from '../../models';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageTemplateComponent {
  @Input() backgroundColorHex: string = color.Transparent;
}
