// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromRootStore from '../../../store';
// models
import { Profile, Personal } from '../../models';
import { Item } from '../../../shared/models';

// profile
export const selectProfile = createSelector(
  fromReducers.selectProfileFeature,
  fromReducers.selectProfileData
);

// personal
export const selectProfilePersonal = createSelector(
  selectProfile,
  (profile) => (profile as Profile).personal as Personal
);

// navs
export const selectProfileNavs = createSelector(
  selectProfile,
  (profile) => (profile as Profile).navs
);

// active nav
export const selectActiveNav = createSelector(
  selectProfileNavs,
  fromRootStore.selectUrl,
  (navs, url) =>
    navs.find((nav) => url?.includes(nav.value as string)) as Item<string>
);
