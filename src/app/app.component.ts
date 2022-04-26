import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
  OnInit,
  ElementRef,
} from '@angular/core';
import { RouterEvent } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AnimationEvent } from '@angular/animations';
import { DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { Observable, timer } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromRootStore from './store';
import * as fromProfileStore from './profile/store';
// models
import { Nav, Personal } from './profile/models';
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
  private _mobileQueryListener: () => void;
  sideNavLeftMarginPx: string = '300px';
  mobileQuery: MediaQueryList | undefined;
  personal$: Observable<Personal> | null = null;
  navs$: Observable<Nav[]> | null = null;
  activeNav$: Observable<Nav> | null = null;
  transitionStatus$: Observable<boolean> | null = null;
  @ViewChild('overlay') overlayEl: ElementRef | null = null;
  @ViewChild(MatSidenavContent)
  sidenavContent: MatSidenavContent | undefined;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private store: Store<
      fromProfileStore.ProfileState | fromRootStore.RootState
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
    this.personal$ = this.store.pipe(
      select(fromProfileStore.selectProfilePersonal)
    );
    this.navs$ = this.store.pipe(select(fromProfileStore.selectProfileNavs));
    this.activeNav$ = this.store.pipe(select(fromProfileStore.selectActiveNav));
    this.transitionStatus$ = this.store.pipe(
      select(fromRootStore.selectTransition),
      map(({ status }) => status)
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery?.removeEventListener('change', this._mobileQueryListener);
  }

  /**
   * on transition done
   * @param event
   */
  onTransitionDone(event: AnimationEvent) {
    console.log('transition');
    const { fromState, totalTime } = event;
    if (fromState) {
      // timer completes, since no second argument is supplied
      timer(totalTime)
        .pipe(
          tap(() => this.sidenavContent?.scrollTo({ top: 0 })),
          map(() => this.overlayEl?.nativeElement),
          tap((el: HTMLDivElement) => (el.style.opacity = '0')),
          delay(totalTime)
        )
        .subscribe(() => {
          this.store.dispatch(fromRootStore.setTransition({ status: false }));
        });
    }
  }
}
