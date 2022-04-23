// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromTransitionReducers from '../reducers/transition.reducer';

// transition
export const selectTransition = createSelector(
  fromReducers.selectTransitionFeatureState,
  fromTransitionReducers.selectTransitionData
);
