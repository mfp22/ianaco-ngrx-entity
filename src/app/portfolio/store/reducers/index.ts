// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPortfolioProjectsReducer from './portfolio-projects.reducer';

export const featureKey = 'portfolio';

export interface PortfolioState {
  [fromPortfolioProjectsReducer.portfolioProjectsFeatureKey]: fromPortfolioProjectsReducer.PortfolioProjectsState;
}

export const reducers: ActionReducerMap<PortfolioState> = {
  [fromPortfolioProjectsReducer.portfolioProjectsFeatureKey]:
    fromPortfolioProjectsReducer.portfolioProjectsReducer,
};

// feature selector
export const selectPortfolioFeatureState =
  createFeatureSelector<PortfolioState>(featureKey);
