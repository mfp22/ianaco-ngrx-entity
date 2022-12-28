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
import * as fromProfileStore from './profile/store';
// models
import { Item } from './shared/models';
// transitions
import { pageTransitionAnimation } from './shared/animations';
import { Personal } from './profile/models';
// configs
// configs
import { DEFAULT_BREAKPOINTS } from './configs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [pageTransitionAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly MOBILE_BREAKPOINT = 'lt-md';
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList | undefined;
  personal$: Observable<Personal> | null = null;
  navs$: Observable<Item<string>[]> | null = null;
  activeNav$: Observable<Item<string>> | null = null;
  transitionStatus$: Observable<boolean> | null = null;
  navInViewStatus: boolean = true;
  @ViewChild('overlay') overlayEl: ElementRef | null = null;
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
   * on nav click
   */
  onNavClick(event: Item<string>) {
    this.router.navigateByUrl(event.value as string);
    if (this.sidenav && this.sidenav.opened) {
      this.sidenav.close();
    }
  }

  /**
   * on transition done
   * @param event
   */
  onTransitionDone(event: AnimationEvent) {
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

  /**
   * on in view
   */
  onInView(event: boolean) {
    this.navInViewStatus = event;
  }
}
