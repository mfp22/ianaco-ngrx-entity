import { Component, Input } from '@angular/core';
// models
import { DetailItem } from '../../models';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss'],
})
export class DetailItemComponent {
  @Input() index: number | undefined;
  @Input() detail: DetailItem | undefined;
  @Input() compress: boolean = false;
}
