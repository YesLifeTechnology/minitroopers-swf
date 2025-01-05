import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const checkLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.user && authService.user.armyName == route.params['army']) {
    return true;
  } else if (authService.user && authService.user.armyName) {
    return router.parseUrl('/' + authService.user.armyName);
  } else {
    return router.parseUrl('/');
  }
};
