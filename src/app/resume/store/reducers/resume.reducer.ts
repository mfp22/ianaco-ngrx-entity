// ngrx
import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
// models
import { Resume } from '../../models';
// configs
import * as fromResumeConfigs from '../../configs';

export const resumeFeatureKey = 'resume';

export interface ResumeState {
  data: Resume | null;
}

export const initialState: ResumeState = {
  data: fromResumeConfigs.resume,
};

export const resumeReducer = createReducer(
  initialState,
  on(fromActions.setResume, (state, action) => ({
    data: action.resume,
  }))
);

// helpers
export const selectResumeData = (state: ResumeState) => state.data;
