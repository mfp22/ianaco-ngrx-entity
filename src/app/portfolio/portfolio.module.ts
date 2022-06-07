import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DragScrollModule } from 'ngx-drag-scroll';
// ngrx
import { StoreModule } from '@ngrx/store';
import { reducers, featureKey } from './store';
// feature
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';
// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    StoreModule.forFeature(featureKey, reducers),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    DragScrollModule,
    SharedModule,
  ],
})
export class PortfolioModule {}
