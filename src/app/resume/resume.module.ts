import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DragScrollModule } from 'ngx-drag-scroll';
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
    MatDividerModule,
    MatButtonModule,
    ResumeRoutingModule,
    StoreModule.forFeature(resumeFeatureKey, resumeReducer),
    DragScrollModule,
    SharedModule,
  ],
})
export class ResumeModule {}
