import { TestBed } from '@angular/core/testing';

import { ChiGuard } from './chi.guard';

describe('ChiGuard', () => {
  let guard: ChiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
