import { Component, Input } from '@angular/core';
// models
import { PortfolioCard } from './../../models';

@Component({
  selector: 'app-portfolio-grid',
  templateUrl: './portfolio-grid.component.html',
  styleUrls: ['./portfolio-grid.component.scss'],
})
export class PortfolioGridComponent {
  @Input() cards: PortfolioCard[] = [];
  @Input() featured: boolean = false;
}
