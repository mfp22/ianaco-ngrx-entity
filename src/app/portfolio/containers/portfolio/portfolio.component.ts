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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    brandColorImage: 'assets/images/design/sports-app/brand-color.jpg',
    images: [
      'assets/images/design/sports-app/sports-app-1.jpg',
      'assets/images/design/sports-app/sports-app-1.jpg',
      'assets/images/design/sports-app/sports-app-1.jpg',
      'assets/images/design/sports-app/sports-app-1.jpg',
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
