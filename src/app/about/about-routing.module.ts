import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// containers
import * as fromContainers from './containers';

const aboutRoutes: Routes = [
  {
    path: '',
    component: fromContainers.AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
