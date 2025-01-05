import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkLoggedGuard } from './check-logged.guard';

describe('checkLoggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkLoggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
