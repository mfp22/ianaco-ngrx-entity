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
import { DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { Observable, timer } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromRootStore from './store';
import * as fromProfileStore from './profile/store';
// models
import { Profile, Nav } from './profile/models';
import { MatSidenavContent } from '@angular/material/sidenav';
// transitions
import { pageTransitionAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [pageTransitionAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly SIDENAV_NG_FLEX_BREAKPOINT = 'lt-md';
  readonly ANIMATION_DELAY = 500;
  private _mobileQueryListener: () => void;
  transition = false;
  activeNav: Nav | null = null;
  mobileQuery: MediaQueryList | undefined;
  profile$: Observable<Profile> | null = null;
  active$: Observable<any> | null = null;
  @ViewChild(MatSidenavContent)
  sidenavContent: MatSidenavContent | undefined;
  @ViewChild('overlay') overlayEl: ElementRef | null = null;

  constructor(
    private router: Router,
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

  onTransitionDone(event: any) {
    if (event.fromState) {
      timer(this.ANIMATION_DELAY)
        .pipe(
          tap(() => this.router.navigate([this.activeNav?.link])),
          map(() => this.overlayEl?.nativeElement),
          tap((el: HTMLDivElement) => (el.style.opacity = '0')),
          delay(this.ANIMATION_DELAY)
        )
        .subscribe(() => {
          this.transition = false;
          this.activeNav = null;
        });
    }
  }

  onNavigate(nav: Nav) {
    if (this.activeNav !== nav) {
      this.activeNav = nav;
      this.transition = true;
    }
  }
}
