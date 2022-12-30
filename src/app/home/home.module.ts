import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// features
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatDividerModule,
    MatButtonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule {}
