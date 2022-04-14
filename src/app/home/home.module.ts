import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
// features
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule {}
