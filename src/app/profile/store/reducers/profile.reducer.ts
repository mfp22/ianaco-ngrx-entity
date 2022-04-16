// ngrx
import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
// models
import { Profile } from '../../models';
// configs
import * as fromProfileConfigs from '../../configs';

export const profileFeatureKey = 'profile';

export interface ProfileState {
  data: Profile | null;
}

export const initialState: ProfileState = {
  data: fromProfileConfigs.profile,
};

export const profileReducer = createReducer(
  initialState,
  on(fromActions.setProfile, (state, action) => ({
    data: action.profile,
  }))
);

// helpers
export const selectProfileData = (state: ProfileState) => state.data;
