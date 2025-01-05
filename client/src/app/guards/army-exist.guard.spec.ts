import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { armyExistGuard } from './army-exist.guard';

describe('armyExistGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => armyExistGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
