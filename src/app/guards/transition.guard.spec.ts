import { TestBed } from '@angular/core/testing';

import { TransitionGuard } from './transition.guard';

describe('TransitionGuard', () => {
  let guard: TransitionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TransitionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
