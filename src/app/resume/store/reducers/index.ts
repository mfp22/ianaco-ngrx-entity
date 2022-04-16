// imports
import { createFeatureSelector } from '@ngrx/store';
import { resumeFeatureKey, ResumeState } from './resume.reducer';
// exports
export * from './resume.reducer';

// select feature
export const selectResumeFeature =
  createFeatureSelector<ResumeState>(resumeFeatureKey);
