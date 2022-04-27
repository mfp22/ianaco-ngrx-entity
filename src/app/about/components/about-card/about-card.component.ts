import { Component, Input } from '@angular/core';
// models
import { Personal } from 'src/app/profile/models';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent {
  @Input() personal: Personal | null = null;
}
