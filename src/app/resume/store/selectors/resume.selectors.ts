// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';

//
export const selectResume = createSelector(
  fromReducers.selectResumeFeature,
  fromReducers.selectResumeData
);
