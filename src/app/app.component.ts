import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
// models
import { Profile } from './models';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  readonly SIDENAV_NG_FLEX_BREAKPOINT = 'lt-md';
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList | undefined;
  @ViewChild(MatSidenavContent)
  sidenavContent: MatSidenavContent | undefined;

  profile: Profile = {
    image: 'assets/images/profile-image-min.png',
    personal: {
      firstName: 'Josh',
      lastName: 'Ianacone',
      occupation: 'Front End Software Engineer',
    },
    navs: [
      {
        label: 'Home',
        link: 'home',
      },
      {
        label: 'projects',
        link: 'projects',
      },
      {
        label: 'resume',
        link: 'resume',
      },
    ],
  };

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    const mediaQuery =
      DEFAULT_BREAKPOINTS.find(
        (br) => br.alias === this.SIDENAV_NG_FLEX_BREAKPOINT
      )?.mediaQuery || 'screen and (max-width: 599.98px)';
    this.mobileQuery = media.matchMedia(mediaQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
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
