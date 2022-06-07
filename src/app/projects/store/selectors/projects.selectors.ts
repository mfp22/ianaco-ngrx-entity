// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromProjectsReducer from '../reducers/projects.reducer';

//  cards state
export const selectProjectsState = createSelector(
  fromReducers.selectFeatureState,
  (state) => state.projects
);

// entities
export const selectCardEntities = createSelector(
  selectProjectsState,
  fromProjectsReducer.selectCardEntities
);

// projects
export const selectProjects = createSelector(
  selectProjectsState,
  fromProjectsReducer.selectProjects
);
