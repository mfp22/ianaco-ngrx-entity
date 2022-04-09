// imports
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioGridComponent } from './portfolio-grid/portfolio-grid.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { PortfolioFeaturedCardComponent } from './portfolio-featured-card/portfolio-featured-card.component';
// exports
export * from './portfolio/portfolio.component';
export * from './portfolio-grid/portfolio-grid.component';
export * from './portfolio-card/portfolio-card.component';
export * from './portfolio-featured-card/portfolio-featured-card.component';
// exports group
export const components = [
  PortfolioComponent,
  PortfolioGridComponent,
  PortfolioCardComponent,
  PortfolioFeaturedCardComponent,
];
