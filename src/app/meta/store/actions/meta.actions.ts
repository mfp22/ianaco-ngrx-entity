import { createAction, props } from '@ngrx/store';
// models
import { AppMeta } from '../../models';

export enum MetaActions {
  StartMeta = '[Meta] Start Meta',
  StopMeta = '[Meta] Stop Meta',
  SetMeta = '[Meta] Set Meta',
  ResetMeta = '[Meta] Reset Meta',
}

// start meta
export const startMeta = createAction(MetaActions.StartMeta);

// stop meta
export const stopMeta = createAction(MetaActions.StopMeta);

// set meta
export const setMeta = createAction(
  MetaActions.SetMeta,
  props<{ appMeta: AppMeta }>()
);

// clear meta
export const resetMeta = createAction(MetaActions.ResetMeta);
