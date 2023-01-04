import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
// features
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, NgOptimizedImage, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
