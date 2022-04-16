// imports
import { createFeatureSelector } from '@ngrx/store';
import { profileFeatureKey, ProfileState } from './profile.reducer';
// exports
export * from './profile.reducer';

// select feature
export const selectProfileFeature =
  createFeatureSelector<ProfileState>(profileFeatureKey);
