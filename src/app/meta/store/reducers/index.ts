// imports
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromMetaReducer from './meta.reducer';
import * as fromMetaConfigReducer from './meta-config.reducer';
// exports
export const featureKey = 'meta';
export * from './meta.reducer';

export interface MetaState {
  [fromMetaReducer.metaFeatureKey]: fromMetaReducer.MetaState;
  [fromMetaConfigReducer.metaConfigFeatureKey]: fromMetaConfigReducer.MetaConfigState;
}

export const reducers: ActionReducerMap<MetaState> = {
  [fromMetaReducer.metaFeatureKey]: fromMetaReducer.metaReducer,
  [fromMetaConfigReducer.metaConfigFeatureKey]:
    fromMetaConfigReducer.metaConfigReducer,
};

export const selectMetaFeatureState =
  createFeatureSelector<MetaState>(featureKey);
