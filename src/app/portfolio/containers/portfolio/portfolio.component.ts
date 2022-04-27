import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
// models
import { PortfolioCardSets } from '../../models';
import { Colorography } from '../../../shared/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  color = Colorography;
  portfolioCardSets$: Observable<PortfolioCardSets> | null = null;

  constructor(private store: Store<fromStore.PortfolioState>) {}

  ngOnInit() {
    this.portfolioCardSets$ = this.store.pipe(
      select(fromStore.selectPortfolioCardSets)
    );
  }
}
