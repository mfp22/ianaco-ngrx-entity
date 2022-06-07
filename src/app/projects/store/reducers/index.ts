// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromProjectsReducer from './projects.reducer';

export const featureKey = 'projects';

export interface State {
  [fromProjectsReducer.projectsFeatureKey]: fromProjectsReducer.ProjectsState;
}

export const reducers: ActionReducerMap<State> = {
  [fromProjectsReducer.projectsFeatureKey]: fromProjectsReducer.projectsReducer,
};

// feature selector
export const selectFeatureState = createFeatureSelector<State>(featureKey);
