// ngrx
import { createFeatureSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
export { RouterReducerState };

export const featureKey = 'router';

export const selectRouter =
  createFeatureSelector<RouterReducerState>(featureKey);

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
