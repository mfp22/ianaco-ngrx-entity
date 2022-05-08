import { Component, Input } from '@angular/core';
// models
import { ArrowType, Colorography } from '../../models';

@Component({
  selector: 'app-arrow-icon',
  templateUrl: './arrow-icon.component.html',
  styleUrls: ['./arrow-icon.component.scss'],
})
export class ArrowIconComponent {
  @Input() arrowType: string = 'down';
  @Input() colorHex: string = Colorography.Bark400;
  get arrowIcon(): string {
    return (ArrowType as any)[this.arrowType];
  }
}
