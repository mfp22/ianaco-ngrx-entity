import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// containers
import * as fromContainers from './containers';

const homeRoutes: Routes = [
  {
    path: '',
    component: fromContainers.HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
