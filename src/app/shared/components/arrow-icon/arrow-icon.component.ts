import { Component, Input } from '@angular/core';
// models
import { ArrowType, Colorography } from '../../models';

@Component({
  selector: 'app-arrow-icon',
  templateUrl: './arrow-icon.component.svg',
  styleUrls: ['./arrow-icon.component.scss'],
})
export class ArrowIconComponent {
  @Input() arrowType: string = 'down';
  @Input() colorHex: string = Colorography.Breeze500;
  get arrow(): string {
    return (ArrowType as any)[this.arrowType];
  }
}
