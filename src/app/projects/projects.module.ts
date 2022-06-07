import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// ngrx
import { StoreModule } from '@ngrx/store';
import { reducers, featureKey } from './store';
// features
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, reducers),
    FlexLayoutModule,
    ProjectsRoutingModule,
    SharedModule,
  ],
})
export class ProjectsModule {}
