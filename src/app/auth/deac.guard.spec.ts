import { TestBed } from '@angular/core/testing';

import { DeacGuard } from './deac.guard';

describe('DeacGuard', () => {
  let guard: DeacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
