// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromPortfolioCardsReducer from '../reducers/portfolio-cards.reducer';

// portfolio cards state
export const selectPortfolioCardsState = createSelector(
  fromReducers.selectPortfolioFeatureState,
  (state) => state.portfolioCards
);

// entities
export const selectPortfolioCardEntities = createSelector(
  selectPortfolioCardsState,
  fromPortfolioCardsReducer.selectPortfolioCardEntities
);

// cards
export const selectPortfolioCards = createSelector(
  selectPortfolioCardsState,
  fromPortfolioCardsReducer.selectPortfolioCards
);

export const selectPortfolioCardSets = createSelector(
  selectPortfolioCards,
  (cards) =>
    cards.reduce(
      (sortedCards: any, card) => {
        if (card.featured) {
          const featured = [...sortedCards.featured, card];
          return { ...sortedCards, featured };
        }
        const general = [...sortedCards.general, card];
        return { ...sortedCards, general };
      },
      { featured: [], general: [] }
    )
);
