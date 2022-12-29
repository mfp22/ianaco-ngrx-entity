// ngrx
import { getSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';

export const selectRouter = fromReducers.selectRouterFeatureState;

export const selectRouterState = createSelector(
  fromReducers.selectRouterFeatureState,
  (state) => state?.state
);

export const {
  selectCurrentRoute,
  selectFragment,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} = getSelectors();
