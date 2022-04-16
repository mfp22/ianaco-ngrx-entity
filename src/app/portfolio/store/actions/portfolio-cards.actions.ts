// ngrx
import { createAction, props } from '@ngrx/store';
// models
import { PortfolioCard } from '../../models';

export enum PortfolioActionTypes {
  SetPortfolioCards = '[Portfolio] Set Portfolio Cards',
}

export const setPortfolioCards = createAction(
  PortfolioActionTypes.SetPortfolioCards,
  props<{ portfolioCards: PortfolioCard[] }>()
);
