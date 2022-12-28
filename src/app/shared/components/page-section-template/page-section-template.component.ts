import { Component, Input } from '@angular/core';
// models
import { Colorography } from '../../models';

@Component({
  selector: 'app-page-section-template',
  templateUrl: './page-section-template.component.html',
  styleUrls: ['./page-section-template.component.scss'],
})
export class PageSectionTemplateComponent {
  @Input() backgroundColorHex: string = Colorography.Transparent;
  @Input() padding: string | undefined;
}
