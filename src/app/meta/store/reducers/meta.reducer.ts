// ngrx
import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions';
// models
import { AppMeta, MetaNames } from './../../models/meta.model';
// configs
import { metaConfig } from '../../configs';

export const metaFeatureKey = 'meta';

export interface MetaState {
  data: AppMeta | null;
}

export const initialMetaState: MetaState = {
  data: metaConfig[MetaNames.App],
};

export const metaReducer = createReducer(
  initialMetaState,
  on(fromActions.setMeta, (state, action) => ({
    data: action.appMeta,
  })),
  on(fromActions.resetMeta, () => initialMetaState)
);

// helpers
export const selectMetaData = (state: MetaState) => state.data;
