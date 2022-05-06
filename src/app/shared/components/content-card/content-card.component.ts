import { Component, Input } from '@angular/core';
// models
import { ContentCard } from '../../models';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() content: ContentCard | undefined;
}
