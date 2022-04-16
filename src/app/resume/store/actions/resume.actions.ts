// ngrx
import { createAction, props } from '@ngrx/store';
// models
import { Resume } from '../../models';

export enum ResumeActionTypes {
  SetResume = '[Resume] Set Resume',
}

export const setResume = createAction(
  ResumeActionTypes.SetResume,
  props<{ resume: Resume }>()
);
