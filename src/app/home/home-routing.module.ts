import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import * as fromComponents from './components';

const homeRoutes: Routes = [
  {
    path: '',
    component: fromComponents.HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
