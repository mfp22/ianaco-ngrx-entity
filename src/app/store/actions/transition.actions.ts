// ngrx
import { createAction, props } from '@ngrx/store';

export enum TransitionActionTypes {
  SetTransition = '[App] Set Transition',
}

export const setTransition = createAction(
  TransitionActionTypes.SetTransition,
  props<{ status: boolean }>()
);
