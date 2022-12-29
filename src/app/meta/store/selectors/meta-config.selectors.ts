// ngrx
import { createSelector } from '@ngrx/store';
import * as fromReducers from '../reducers';
import * as fromMetaConfigReducer from '../reducers/meta-config.reducer';
// models
import { AppMeta } from './../../models/meta.model';

export const selectMetaConfigState = createSelector(
  fromReducers.selectMetaFeatureState,
  (state) => state.metaConfig
);

export const selectMetaConfigData = createSelector(
  selectMetaConfigState,
  fromMetaConfigReducer.selectMetaConfigData
);

// meta config by url
export const selectMetaConfigByUrl = (url: string) =>
  createSelector(selectMetaConfigData, (metaConfig) => {
    const appMeta = Object.values(metaConfig).find((appMeta: AppMeta) =>
      url.includes(appMeta.routerSegment)
    );
    return appMeta || metaConfig['default'];
  }) as any;
