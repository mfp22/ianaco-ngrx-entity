import { Component, Input } from '@angular/core';
// models
import { Personal } from './../../../profile/models';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() personal: Personal | null = null;
}
