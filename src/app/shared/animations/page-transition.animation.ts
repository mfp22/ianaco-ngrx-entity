import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
} from '@angular/animations';

export const pageTransitionAnimation = trigger('pageTransition', [
  transition('void => *', [
    style({
      transform: 'translateY(100%)',
    }),
    animate('700ms'),
  ]),
]);
