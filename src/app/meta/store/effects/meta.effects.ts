import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
// ngrx
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as fromActions from '../actions';
// services
import { MetaService } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class MetaEffects {
  constructor(private metaService: MetaService, private actions$: Actions) {}

  // start meta
  startMeta$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.startMeta),
        tap(() => this.metaService.start())
      ),
    { dispatch: false }
  );

  // stop meta
  stopMeta$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.stopMeta),
        tap(() => this.metaService.stop())
      ),
    { dispatch: false }
  );
}
