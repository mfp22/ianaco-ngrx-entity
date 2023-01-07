// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouterReducer from './router.reducer';
import { adaptReducer } from '@state-adapt/core';

export interface RootState {
  [fromRouterReducer.featureKey]: fromRouterReducer.RouterReducerState;
  adapt: any;
}

export const reducers: ActionReducerMap<RootState> = {
  [fromRouterReducer.featureKey]: fromRouterReducer.routerReducer,
  adapt: adaptReducer,
};

// feature selectors
export const selectRouterFeatureState =
  createFeatureSelector<fromRouterReducer.RouterReducerState>(
    fromRouterReducer.featureKey
  );
