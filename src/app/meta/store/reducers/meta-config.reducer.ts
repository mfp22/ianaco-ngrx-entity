import { createReducer, on } from '@ngrx/store';
// models
import { MetaConfig } from '../../models';
// configs
import { metaConfig } from '../../configs';

export const metaConfigFeatureKey = 'metaConfig';

export interface MetaConfigState {
  data: MetaConfig;
}

export const initialMetaConfigState: MetaConfigState = {
  data: metaConfig,
};

export const metaConfigReducer = createReducer(initialMetaConfigState);

// helpers
export const selectMetaConfigData = (state: MetaConfigState) => state.data;
