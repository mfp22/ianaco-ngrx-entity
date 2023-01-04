import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// features
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
