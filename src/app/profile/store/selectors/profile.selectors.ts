// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromRootStore from '../../../store';
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

// navs
export const selectProfileNavs = createSelector(
  selectProfile,
  (profile) => (profile as Profile).navs
);

export const selectActiveNavIndex = createSelector(
  selectProfileNavs,
  fromRootStore.selectUrl,
  (navs, url) => {
    const activeNav = navs.find((nav) => url?.includes(nav.link));
    return activeNav ? navs.indexOf(activeNav) : 0;
  }
);
