import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { timer } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
// animations
import { slideUpAnimation, pageTransitionAnimation } from '../../animations';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
  animations: [slideUpAnimation, pageTransitionAnimation],
})
export class PageTemplateComponent {
  readonly ANIMATION_DELAY = 500;
  @Input() pageName: string | null = null;
  @Input() backgroundColorHex: string = '#FFFFFF';
  @ViewChild('overlay') overlayEl: ElementRef | null = null;

  /**
   * on animation done event
   */
  onAnimationDoneEvent(): void {
    console.log('done');
    timer(this.ANIMATION_DELAY)
      .pipe(
        map(() => this.overlayEl?.nativeElement),
        tap((el: HTMLDivElement) => (el.style.opacity = '0')),
        delay(this.ANIMATION_DELAY),
        tap((el: HTMLDivElement) => (el.style.display = 'none'))
      )
      .subscribe();
  }
}
