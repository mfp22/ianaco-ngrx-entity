import { style, animate, trigger, transition } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  transition('void => *', [
    style({
      opacity: 0.1,
      transform: 'translateX(100px)',
    }),
    animate('600ms ease-in'),
  ]),
]);
