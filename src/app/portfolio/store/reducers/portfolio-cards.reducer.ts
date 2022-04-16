// ngrx
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as fromActions from '../actions';
// models
import { PortfolioCard } from '../../models';
// configs
import { portfolio } from '../../configs';

export const portfolioCardsFeatureKey = 'portfolioCards';

export interface PortfolioCardsState extends EntityState<PortfolioCard> {}

export function selectPortfolioCardId(card: PortfolioCard) {
  return card.name;
}

export const portfolioCardsAdapter = createEntityAdapter({
  selectId: selectPortfolioCardId,
});

const { cards } = portfolio;
const entities = cards.reduce((entities, card) => {
  return { ...entities, [card.name]: card };
}, {});
const ids = Object.keys(entities) as any[];

export const initialState = portfolioCardsAdapter.getInitialState({
  ids,
  entities,
});

export const portfolioCardsReducer = createReducer(
  initialState,
  on(fromActions.setPortfolioCards, (state, action) => ({
    ...portfolioCardsAdapter.setAll(action.portfolioCards, state),
  }))
);

// helpers
// helpers
const { selectEntities, selectAll } = portfolioCardsAdapter.getSelectors();
export const selectPortfolioCardEntities = selectEntities;
export const selectPortfolioCards = selectAll;
