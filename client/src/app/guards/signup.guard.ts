import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const signupGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.user && authService.user.armyName) {
    return router.parseUrl(`/${authService.user.armyName}`);
  } else {
    return true;
  }
};
