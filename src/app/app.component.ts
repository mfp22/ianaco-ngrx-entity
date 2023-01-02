import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
  OnInit,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AnimationEvent } from '@angular/animations';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Observable, timer } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromRootStore from './store';
import * as fromMetaStore from './meta/store';
import * as fromProfileStore from './profile/store';
// models
import { Item } from './shared/models';
// transitions
import { Personal } from './profile/models';
// configs
import { DEFAULT_BREAKPOINTS } from './configs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly MOBILE_BREAKPOINT = 'lt-md';
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList | undefined;
  personal$: Observable<Personal> | null = null;
  navs$: Observable<Item<string>[]> | null = null;
  activeNav$: Observable<Item<string>> | null = null;
  navInViewStatus: boolean = true;
  footerInViewStatus: boolean = false;
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
  @ViewChild(MatSidenavContent)
  sidenavContent: MatSidenavContent | undefined;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private store: Store<
      fromProfileStore.ProfileState | fromRootStore.RootState
    >
  ) {
    const mediaQuery =
      DEFAULT_BREAKPOINTS.find((br) => br.alias === this.MOBILE_BREAKPOINT)
        ?.mediaQuery || 'screen and (max-width: 599.98px)';
    this.mobileQuery = media.matchMedia(mediaQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    // meta
    this.store.dispatch(fromMetaStore.startMeta());
    // personal
    this.personal$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal)
    );
    this.navs$ = this.store.pipe(select(fromProfileStore.selectProfileNavs));
    this.activeNav$ = this.store.pipe(select(fromProfileStore.selectActiveNav));
  }

  ngOnDestroy(): void {
    this.mobileQuery?.removeEventListener('change', this._mobileQueryListener);
  }

  /**
   * on nav click
   */
  onNavClick(event: Item<string>) {
    this.router.navigateByUrl(event.value as string);
    if (this.sidenav && this.sidenav.opened) {
      this.sidenav.close();
    }
  }

  /**
   * on in view
   */
  onInView(event: boolean) {
    this.navInViewStatus = event;
  }

  /**
   * on in view footer
   * @param event
   */
  onInViewFooter(event: boolean) {
    this.footerInViewStatus = event;
    console.log('here', this.footerInViewStatus);
  }
}
