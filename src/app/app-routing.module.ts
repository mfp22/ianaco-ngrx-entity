import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// guards
import { TransitionGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [TransitionGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'resume',
        loadChildren: () =>
          import('./resume/resume.module').then((m) => m.ResumeModule),
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
