import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
  OnInit,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromRootStore from './store';
import * as fromProfileStore from './profile/store';
// models
import { Profile } from './profile/models';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly SIDENAV_NG_FLEX_BREAKPOINT = 'lt-md';
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList | undefined;
  profile$: Observable<Profile> | null = null;
  active$: Observable<any> | null = null;
  @ViewChild(MatSidenavContent)
  sidenavContent: MatSidenavContent | undefined;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private store: Store<
      fromProfileStore.ProfileState | fromRootStore.RouterReducerState
    >
  ) {
    const mediaQuery =
      DEFAULT_BREAKPOINTS.find(
        (br) => br.alias === this.SIDENAV_NG_FLEX_BREAKPOINT
      )?.mediaQuery || 'screen and (max-width: 599.98px)';
    this.mobileQuery = media.matchMedia(mediaQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.profile$ = this.store.pipe(
      select(fromProfileStore.selectProfile)
    ) as Observable<Profile>;

    this.active$ = this.store.pipe(select(fromRootStore.selectUrl));
  }
  ngOnDestroy(): void {
    this.mobileQuery?.removeEventListener('change', this._mobileQueryListener);
  }

  /**
   * on activate route
   */
  onActivateRoute() {
    this.sidenavContent?.scrollTo({ top: 0 });
  }
}
