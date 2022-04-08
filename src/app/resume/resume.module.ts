import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// features
import { ResumeRoutingModule } from './resume-routing.module';
import { SharedModule } from '../shared/shared.module';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, SharedModule, ResumeRoutingModule],
})
export class ResumeModule {}
