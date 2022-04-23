// ngrx
import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
// models
import { Transition } from '../../models';
// animations
import { TRANSITION_DURATION } from 'src/app/shared/animations';

export const featureKey = 'transition';

export interface TransitionState {
  data: Transition;
}

export const initialState: TransitionState = {
  data: { status: false, duration: TRANSITION_DURATION },
};

export const transitionReducer = createReducer(
  initialState,
  on(fromActions.setTransition, (state, action) => ({
    ...state,
    data: { ...state.data, status: action.status },
  }))
);

// helpers
export const selectTransitionData = (state: TransitionState) => state.data;
