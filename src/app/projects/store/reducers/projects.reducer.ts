// ngrx
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as fromActions from '../actions';
// models
import { DetailItem } from '../../../shared/models';
// configs
import { projects } from '../../configs';

export const projectsFeatureKey = 'projects';

export interface ProjectsState extends EntityState<DetailItem> {}

export function selectProjectId(project: DetailItem) {
  return project.name as string;
}

export const ProjectsAdapter = createEntityAdapter({
  selectId: selectProjectId,
});

const entities = projects.reduce((entities, project) => {
  return { ...entities, [project.name as string]: project };
}, {});

const ids = Object.keys(entities) as any[];

export const initialState = ProjectsAdapter.getInitialState({
  ids,
  entities,
});

export const projectsReducer = createReducer(
  initialState,
  on(fromActions.setProjects, (state, action) => ({
    ...ProjectsAdapter.setAll(action.projects, state),
  }))
);

// helpers
const { selectEntities, selectAll } = ProjectsAdapter.getSelectors();
export const selectCardEntities = selectEntities;
export const selectProjects = selectAll;
