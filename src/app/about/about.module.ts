import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// features
import { AboutRoutingModule } from './about-routing.module';
import { BubbleGraphModule } from '../bubble-graph/bubble-graph.module';
import { SharedModule } from '../shared/shared.module';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AboutRoutingModule,
    BubbleGraphModule,
    SharedModule,
  ],
})
export class AboutModule {}
