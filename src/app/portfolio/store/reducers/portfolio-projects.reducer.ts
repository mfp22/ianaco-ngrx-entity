// ngrx
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as fromActions from '../actions';
// models
import { DetailItem } from '../../../shared/models';
// configs
import { portfolio } from '../../configs';

export const portfolioProjectsFeatureKey = 'portfolioProjects';

export interface PortfolioProjectsState extends EntityState<DetailItem> {}

export function selectPortfolioProjectId(project: DetailItem) {
  return project.name as string;
}

export const portfolioProjectsAdapter = createEntityAdapter({
  selectId: selectPortfolioProjectId,
});

const { projects } = portfolio;
const entities = projects.reduce((entities, project) => {
  return { ...entities, [project.name as string]: project };
}, {});
const ids = Object.keys(entities) as any[];

export const initialState = portfolioProjectsAdapter.getInitialState({
  ids,
  entities,
});

export const portfolioProjectsReducer = createReducer(
  initialState,
  on(fromActions.setPortfolioProjects, (state, action) => ({
    ...portfolioProjectsAdapter.setAll(action.projects, state),
  }))
);

// helpers
// helpers
const { selectEntities, selectAll } = portfolioProjectsAdapter.getSelectors();
export const selectPortfolioCardEntities = selectEntities;
export const selectPortfolioProjects = selectAll;
