import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { StoreModule } from '@ngrx/store';
import { reducers, featureKey } from './store';
// feature
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from '../shared/shared.module';
// containers
import * as fromContainers from './containers';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    StoreModule.forFeature(featureKey, reducers),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    SharedModule,
  ],
})
export class PortfolioModule {}
