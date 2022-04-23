import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
} from '@angular/animations';
// consts
export const TRANSITION_DURATION = 700;

export const pageTransitionAnimation = trigger('pageTransition', [
  transition('void => *', [
    style({
      transform: 'translateY(100%)',
    }),
    animate(TRANSITION_DURATION),
  ]),
]);
