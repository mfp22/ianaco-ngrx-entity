import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
// ngrx
import { StoreModule } from '@ngrx/store';
import { resumeReducer, resumeFeatureKey } from './store/reducers';
// features
import { ResumeRoutingModule } from './resume-routing.module';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    SharedModule,
    ResumeRoutingModule,
    StoreModule.forFeature(resumeFeatureKey, resumeReducer),
  ],
})
export class ResumeModule {}
