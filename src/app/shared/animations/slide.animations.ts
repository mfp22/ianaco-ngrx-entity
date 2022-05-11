import {
  style,
  animate,
  trigger,
  transition,
  query,
} from '@angular/animations';

/**
 * slide up
 */
export const slideUpAnimation = trigger('slideUp', [
  transition(':enter', [
    style({
      opacity: 0.1,
      transform: 'translateY(100px)',
    }),
    animate('500ms'),
  ]),
]);

/**
 * slide up appear
 */
export const slideUpAppearAnimation = trigger('slideUpAppear', [
  transition(':enter', [
    query('.animate-content__content', [
      style({
        transform: 'translateY(100%)',
      }),
      animate('500ms'),
    ]),
  ]),
]);

/**
 * slide down appear
 */
export const slideDownAppearAnimation = trigger('slideDownAppear', [
  transition(':enter', [
    query('.animate-content__content', [
      style({
        transform: 'translateY(-100%)',
      }),
      animate('500ms'),
    ]),
  ]),
]);

/**
 * slide in right
 */
export const slideInRightAnimation = trigger('slideInRight', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100px)',
    }),
    animate('500ms'),
  ]),
]);

/**
 * slide in left
 */
export const slideInLeftAnimation = trigger('slideInLeft', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100px)',
    }),
    animate('500ms'),
  ]),
]);
