import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducers, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class MetaModule {}
