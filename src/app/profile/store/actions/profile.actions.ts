// ngrx
import { createAction, props } from '@ngrx/store';
// models
import { Profile } from '../../models';

export enum ProfileActionTypes {
  SetProfile = '[Profile] Set Profile',
}

export const setProfile = createAction(
  ProfileActionTypes.SetProfile,
  props<{ profile: Profile }>()
);
