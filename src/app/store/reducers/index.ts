// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouterReducer from './router.reducer';
import * as fromTransitionReducer from './transition.reducer';

export interface RootState {
  [fromTransitionReducer.featureKey]: fromTransitionReducer.TransitionState;
  [fromRouterReducer.featureKey]: fromRouterReducer.RouterReducerState;
}

export const reducers: ActionReducerMap<RootState> = {
  [fromTransitionReducer.featureKey]: fromTransitionReducer.transitionReducer,
  [fromRouterReducer.featureKey]: fromRouterReducer.routerReducer,
};

// feature selectors
export const selectRouterFeatureState =
  createFeatureSelector<fromRouterReducer.RouterReducerState>(
    fromRouterReducer.featureKey
  );

export const selectTransitionFeatureState =
  createFeatureSelector<fromTransitionReducer.TransitionState>(
    fromTransitionReducer.featureKey
  );
