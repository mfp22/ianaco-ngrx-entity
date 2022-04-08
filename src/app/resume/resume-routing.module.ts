import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import * as fromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: fromComponents.ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
