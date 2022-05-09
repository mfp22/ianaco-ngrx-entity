import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

export const textSlideUpAppearAnimation = trigger('textSlideUpAppear', [
  transition(':enter', [
    query('.animate-text__char', [
      style({ transform: 'translateY(100%)' }),
      stagger(30, [animate(300)]),
    ]),
  ]),
]);
