// ngrx
import { createAction, props } from '@ngrx/store';
// models
import { DetailItem } from '../../../shared/models';

export enum ProjectsActionTypes {
  SetProjects = '[Projects] Set Projects',
}

export const setProjects = createAction(
  ProjectsActionTypes.SetProjects,
  props<{ projects: DetailItem[] }>()
);
