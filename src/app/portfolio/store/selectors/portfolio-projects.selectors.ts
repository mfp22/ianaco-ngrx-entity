// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromPortfolioProjectsReducer from '../reducers/portfolio-projects.reducer';

// portfolio cards state
export const selectPortfolioProjectsState = createSelector(
  fromReducers.selectPortfolioFeatureState,
  (state) => state.portfolioProjects
);

// entities
export const selectPortfolioCardEntities = createSelector(
  selectPortfolioProjectsState,
  fromPortfolioProjectsReducer.selectPortfolioCardEntities
);

// projects
export const selectPortfolioProjects = createSelector(
  selectPortfolioProjectsState,
  fromPortfolioProjectsReducer.selectPortfolioProjects
);
