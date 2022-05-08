// ngrx
import { createAction, props } from '@ngrx/store';
// models
import { DetailItem } from '../../../shared/models';

export enum PortfolioActionTypes {
  SetPortfolioProjects = '[Portfolio] Set Portfolio Projects',
}

export const setPortfolioProjects = createAction(
  PortfolioActionTypes.SetPortfolioProjects,
  props<{ projects: DetailItem[] }>()
);
