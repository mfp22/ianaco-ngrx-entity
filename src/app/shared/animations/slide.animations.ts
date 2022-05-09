import {
  style,
  animate,
  trigger,
  transition,
  query,
} from '@angular/animations';

export const slideUpAnimation = trigger('slideUp', [
  transition(':enter', [
    style({
      opacity: 0.1,
      transform: 'translateY(100px)',
    }),
    animate('600ms ease-in'),
  ]),
]);

export const slideUpAppearAnimation = trigger('slideUpAppear', [
  transition(':enter', [
    query('.animate-content__content', [
      style({
        transform: 'translateY(100%)',
      }),
      animate('500ms ease-in'),
    ]),
  ]),
]);

export const slideInAnimation = trigger('slideIn', [
  transition('void => *', [
    style({
      opacity: 0.1,
      transform: 'translateX(100px)',
    }),
    animate('600ms ease-in'),
  ]),
]);
