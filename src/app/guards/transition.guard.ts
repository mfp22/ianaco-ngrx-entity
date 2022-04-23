import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, mergeMap, of } from 'rxjs';
import { delay, tap, take } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromRootStore from '../store';
// models
import { Transition } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TransitionGuard implements CanActivateChild {
  readonly DEFAULT_STATUS = true;
  constructor(private store: Store<fromRootStore.RootState>) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.pipe(
      select(fromRootStore.selectTransition),
      take(1),
      mergeMap(({ duration }) =>
        of(this.DEFAULT_STATUS).pipe(
          tap(() => {
            this.store.dispatch(
              fromRootStore.setTransition({ status: this.DEFAULT_STATUS })
            );
          }),
          delay(duration)
        )
      )
    );
  }
}
