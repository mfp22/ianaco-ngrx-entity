import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// features
import { AboutRoutingModule } from './about-routing.module';
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
    MatButtonModule,
    AboutRoutingModule,
    SharedModule,
  ],
})
export class AboutModule {}
