import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-section-header-template',
  templateUrl: './page-section-header-template.component.html',
  styleUrls: ['./page-section-header-template.component.scss'],
})
export class PageSectionHeaderTemplateComponent {
  @Input() supertitle: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() animate: boolean = false;
}
