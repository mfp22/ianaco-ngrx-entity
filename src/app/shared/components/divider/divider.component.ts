import { Component, Input } from '@angular/core';
// model
import { DividerSizes } from '../../models';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  sizeValue: string = DividerSizes.medium;
  @Input() set size(value: string) {
    this.sizeValue = (DividerSizes as any)[value];
  }
}
