import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// features
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, FlexLayoutModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
