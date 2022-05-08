import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
// models
import { Colorography, DetailItem } from '../../../shared/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  color = Colorography;
  portfolioProjects$: Observable<DetailItem[]> | null = null;

  constructor(private store: Store<fromStore.PortfolioState>) {}

  ngOnInit() {
    this.portfolioProjects$ = this.store.pipe(
      select(fromStore.selectPortfolioProjects)
    );
  }
}
