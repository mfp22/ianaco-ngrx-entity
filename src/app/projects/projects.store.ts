// state-adapt
import { createAdapter } from '@state-adapt/core';
import {
  createEntityAdapter,
  createEntityState,
  EntityState,
} from '@state-adapt/core/adapters';
import { adaptNgrx } from '@state-adapt/ngrx';
// models
import { DetailItem } from '../shared/models';
// configs
import { projects } from './configs';
import { Injectable } from '@angular/core';

export interface ProjectsState extends EntityState<DetailItem, string> {}
const projectAdapter = createAdapter<DetailItem>()({
  selectors: {
    id: (project) => project.name as string,
  },
});

export const projectsAdapter = createEntityAdapter<DetailItem, string>()(
  projectAdapter
);
const emptyState = createEntityState<DetailItem, string>();
const initialState = projectsAdapter.setAll(emptyState, projects);

@Injectable({ providedIn: 'root' })
export class ProjectStore {
  store = adaptNgrx(['projects', initialState], projectsAdapter);
}
