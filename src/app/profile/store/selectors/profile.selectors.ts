// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromRootStore from '../../../store';
// models
import { Profile, Nav } from '../../models';

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

// navs
export const selectProfileNavs = createSelector(
  selectProfile,
  (profile) => (profile as Profile).navs
);

export const selectActiveNav = createSelector(
  selectProfileNavs,
  fromRootStore.selectUrl,
  (navs, url) => navs.find((nav) => url?.includes(nav.link)) as Nav
);
