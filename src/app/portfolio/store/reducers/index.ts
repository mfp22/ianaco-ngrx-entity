// ngrx
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPortfolioCardsReducer from './portfolio-cards.reducer';

export const featureKey = 'portfolio';

export interface PortfolioState {
  [fromPortfolioCardsReducer.portfolioCardsFeatureKey]: fromPortfolioCardsReducer.PortfolioCardsState;
}

export const reducers: ActionReducerMap<PortfolioState> = {
  [fromPortfolioCardsReducer.portfolioCardsFeatureKey]:
    fromPortfolioCardsReducer.portfolioCardsReducer,
};

// feature selector
export const selectPortfolioFeatureState =
  createFeatureSelector<PortfolioState>(featureKey);
