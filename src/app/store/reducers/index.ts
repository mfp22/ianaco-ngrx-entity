// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouterReducer from './router.reducer';

export interface RootState {
  [fromRouterReducer.featureKey]: fromRouterReducer.RouterReducerState;
}

export const reducers: ActionReducerMap<RootState> = {
  [fromRouterReducer.featureKey]: fromRouterReducer.routerReducer,
};

// feature selectors
export const selectRouterFeatureState =
  createFeatureSelector<fromRouterReducer.RouterReducerState>(
    fromRouterReducer.featureKey
  );
