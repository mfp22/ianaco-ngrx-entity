import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import * as fromComponents from './components';

const resumeRoutes: Routes = [
  {
    path: '',
    component: fromComponents.ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(resumeRoutes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
