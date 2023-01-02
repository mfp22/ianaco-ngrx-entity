import {
  Component,
  Input,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';
// models
import { color } from '../../models';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageTemplateComponent implements AfterViewInit {
  @Input() backgroundColorHex: string = color.Transparent;

  ngAfterViewInit() {
    const matSidenavContentRef = document.querySelector('.mat-sidenav-content');
    if (matSidenavContentRef) {
      matSidenavContentRef.scrollTop = 0;
    }
  }
}
