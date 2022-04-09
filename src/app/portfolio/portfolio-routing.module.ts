import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import * as fromComponents from './components';

const portfolioRoutes: Routes = [
  {
    path: '',
    component: fromComponents.PortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(portfolioRoutes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
