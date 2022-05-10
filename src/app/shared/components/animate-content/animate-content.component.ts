import { Component, Input } from '@angular/core';
// animations
import {
  slideUpAnimation,
  slideUpAppearAnimation,
  slideInLeftAnimation,
  slideInRightAnimation,
} from '../../animations';

@Component({
  selector: 'app-animate-content',
  templateUrl: './animate-content.component.html',
  styleUrls: ['./animate-content.component.scss'],
  animations: [
    slideUpAnimation,
    slideUpAppearAnimation,
    slideInLeftAnimation,
    slideInRightAnimation,
  ],
})
export class AnimateContentComponent {
  @Input() animation: string = '';
}
