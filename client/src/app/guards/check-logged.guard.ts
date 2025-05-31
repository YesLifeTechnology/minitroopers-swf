import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../stores/auth.store';

export const checkLoggedGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (
    authStore.isAuthenticated() &&
    authStore.user() &&
    authStore.user()!.armyName == route.parent?.paramMap.get('army')
  ) {
    return true;
  } else if (authStore.user() && authStore.user()!.armyName) {
    return router.parseUrl('/' + authStore.user()!.armyName);
  } else {
    return router.parseUrl('/');
  }
};
