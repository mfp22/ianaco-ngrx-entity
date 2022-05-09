import { Component } from '@angular/core';
// animations
import { slideUpAppearAnimation } from '../../animations';

@Component({
  selector: 'app-animate-content',
  templateUrl: './animate-content.component.html',
  styleUrls: ['./animate-content.component.scss'],
  animations: [slideUpAppearAnimation],
})
export class AnimateContentComponent {}
