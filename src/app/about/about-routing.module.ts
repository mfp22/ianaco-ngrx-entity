import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import * as fromComponents from './components';

const aboutRoutes: Routes = [
  {
    path: '',
    component: fromComponents.AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
