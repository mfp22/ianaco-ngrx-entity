// ngrx
import { getSelectors } from '@ngrx/router-store';
import * as fromReducers from '../reducers';

export const selectRouter = fromReducers.selectRouterFeatureState;

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
