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

@NgModule({
  declarations: [...fromContainers.containers],
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
