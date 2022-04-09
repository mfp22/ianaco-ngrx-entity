import { Component, Input } from '@angular/core';
// models
import { PortfolioCard } from './../../models';

@Component({
  selector: 'app-portfolio-featured-card',
  templateUrl: './portfolio-featured-card.component.html',
  styleUrls: ['./portfolio-featured-card.component.scss'],
})
export class PortfolioFeaturedCardComponent {
  @Input() card: PortfolioCard | undefined;
}
