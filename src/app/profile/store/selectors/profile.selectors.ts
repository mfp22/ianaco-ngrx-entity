// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
// models
import { Profile } from '../../models';

// profile
export const selectProfile = createSelector(
  fromReducers.selectProfileFeature,
  fromReducers.selectProfileData
);

// personal
export const selectProfilePersonal = createSelector(
  selectProfile,
  (profile) => (profile as Profile).personal
);
