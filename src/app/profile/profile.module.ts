import { NgModule } from '@angular/core';
// ngrx
import { StoreModule } from '@ngrx/store';
import { profileFeatureKey, profileReducer } from './store';

@NgModule({
  imports: [StoreModule.forFeature(profileFeatureKey, profileReducer)],
})
export class ProfileModule {}
