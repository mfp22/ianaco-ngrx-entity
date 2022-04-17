import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// containers
import * as fromContainers from './containers';

const portfolioRoutes: Routes = [
  {
    path: '',
    component: fromContainers.PortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(portfolioRoutes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
