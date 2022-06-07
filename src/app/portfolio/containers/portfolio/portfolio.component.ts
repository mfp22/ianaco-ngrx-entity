import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
// models
import { Gallery } from '../../models';
import { Colorography, DetailItem } from '../../../shared/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  color = Colorography;
  portfolioProjects$: Observable<DetailItem[]> | null = null;
  animationMap: { [id: string]: boolean } = {};
  gallery: Gallery = {
    name: 'sports app',
    role: 'Designer & Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    branding: {
      colorPalette: ['#121212', '#FFC928', '#707070', '#FBFBFD'],
      typography: 'Roboto',
    },
    primaryImage: 'assets/images/design/sports-app/sports-app-1.jpg',
    secondaryImage: 'assets/images/design/sports-app/sports-app-2.jpg',
    mobileImages: [
      'assets/images/design/sports-app/sports-app-mobile-1.png',
      'assets/images/design/sports-app/sports-app-mobile-2.png',
    ],
  };

  constructor(private store: Store<fromStore.PortfolioState>) {}

  ngOnInit() {
    this.portfolioProjects$ = this.store.pipe(
      select(fromStore.selectPortfolioProjects)
    );
  }

  /**
   * on in view
   */
  onInView(event: string) {
    this.animationMap[event] = true;
  }
}
